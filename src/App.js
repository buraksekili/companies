import React, { useState } from "react";
import { Box, ResponsiveContext, Anchor } from "grommet";
import axios from "axios";
import { convertString, inputCheck } from "./util";
import Header from "./components/Header";
import AboutPageWeb from "./components/AboutPageWeb";
import AboutPageMobile from "./components/AboutPageMobile";
import InputForm from "./components/InputForm";
import CompanyCard from "./components/CompanyCard";

function App() {
  const [isFetching, setIsFetching] = useState(undefined);
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalCount, setTotalCount] = useState(undefined);
  const [fetchMore, setFetchMore] = useState(undefined);
  const [companies, setCompanies] = useState(undefined);
  const [page, setPage] = useState(1);

  const fetchCompanies = async (pageNum, more, language, location) => {
    try {
      setIsFetching(true);

      let searchQuery = `language:${language}+type:org`;
      if (location) {
        searchQuery += `+location:${location}`;
      }
      const result = await axios.get(
        "https://api.github.com/search/users?q=" + searchQuery,
        {
          params: { page: pageNum },
        }
      );

      setTotalCount(result.data.total_count);
      if (result.data.total_count < pageNum * 30) {
        setFetchMore(false);
      } else {
        setFetchMore(true);
      }

      if (more) {
        const companiesArr = companies.concat(result.data.items);
        console.log(companiesArr);
        setCompanies(companiesArr);
      } else {
        console.log(result.data.items);
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
            <Box flex align="center" margin="xsmall" justify="start">
              <InputForm fetchCompanies={fetchCompanies} />
              {companies && (
                <Box justify="evenly" flex wrap width="100%" direction="row">
                  {companies.map((company) => (
                    <CompanyCard
                      companyURL={company.html_url}
                      login={company.login}
                      avatarURL={company.avatar_url}
                    />
                  ))}
                </Box>
              )}
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
