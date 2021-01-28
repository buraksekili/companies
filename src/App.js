import React, { useState } from "react";
import { Box, ResponsiveContext, Button } from "grommet";
import axios from "axios";
import { convertString } from "./util";
import Header from "./components/Header";
import AboutPageWeb from "./components/AboutPageWeb";
import AboutPageMobile from "./components/AboutPageMobile";
import InputForm from "./components/InputForm";
import CompanyCard from "./components/CompanyCard";
import Spinner from "./components/Spinner/SpinnerBrand";

function App() {
  const [values, setValues] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalCount, setTotalCount] = useState(undefined);
  const [fetchMore, setFetchMore] = useState(undefined);
  const [companies, setCompanies] = useState(undefined);
  const [page, setPage] = useState(1);

  const fetchCompanies = async (pageNum, more, language, location) => {
    try {
      if (language || location) {
        setValues({ language, location });
      } else {
        language = values.language;
        location = values.location;
      }

      language = convertString(language);
      location = convertString(location);

      setIsFetching(true);
      let searchQuery = `language:${language}+type:org`;
      if (location) {
        searchQuery += `+location:${location}`;
      }
      const result = await axios.get(
        "https://api.github.com/search/users?q=" + searchQuery,
        { params: { page: pageNum } }
      );

      setTotalCount(result.data.total_count);
      if (result.data.total_count < pageNum * 30) {
        setFetchMore(false);
      } else {
        setFetchMore(true);
      }

      if (more) {
        const companiesArr = companies.concat(result.data.items);
        setCompanies(companiesArr);
      } else {
        setCompanies(result.data.items);
      }

      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.error(error.message);
    }
  };

  const loadMore = (e, pageNum) => {
    setPage(pageNum);
    e.preventDefault();
    if (totalCount < (pageNum - 1) * 30) {
      return setFetchMore(false);
    }
    setFetchMore(true);
    fetchCompanies(pageNum, true);
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill>
          <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box fill flex align="center" margin="xsmall" justify="start">
              <InputForm fetchCompanies={fetchCompanies} />
              {companies && (
                <Box
                  gridArea="header"
                  justify="evenly"
                  flex
                  wrap
                  fill
                  direction="row"
                >
                  {companies.map((company, i) => (
                    <CompanyCard
                      key={i}
                      companyURL={company.html_url}
                      login={company.login}
                      avatarURL={company.avatar_url}
                    />
                  ))}
                  {fetchMore && companies && (
                    <Box width="xxlarge">
                      <Button
                        disabled={isFetching}
                        size="large"
                        margin="medium"
                        label="Load More"
                        onClick={(e) => loadMore(e, page + 1)}
                      />
                    </Box>
                  )}
                </Box>
              )}
              {isFetching && <Spinner />}
            </Box>
            {!showSidebar || size !== "small" ? (
              <AboutPageWeb showSidebar={showSidebar} />
            ) : (
              <AboutPageMobile setShowSidebar={setShowSidebar} />
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default App;
