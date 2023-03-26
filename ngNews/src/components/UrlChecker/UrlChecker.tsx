import React, { useEffect } from "react";
import countries from "../../Utils/countryList";
import { Country } from "../../types/countryTypes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setCurrentCountry } from "../../slices/countrySlice";

const UrlChecker = () => {
  const dispatch = useDispatch();

  const currentCountry = useSelector(
    (state: RootState) => state.country.currentCountry
  );

  const url = window.location.href;
  const regex = /\/country\/([a-z]{2})/i;
  const match = regex.exec(url);
  const checkUrlForCountryCode = () => {
    if (match) {
      const countryIndex = countries.findIndex(
        (c) => c.countryCode === match[1]
      );
      if (countryIndex >= 0) {
        const countryFromUrl: Country = {
          countryCode: countries[countryIndex].countryCode,
          label: countries[countryIndex].label,
        };
        if (countryFromUrl !== currentCountry) {
          dispatch(setCurrentCountry(countryFromUrl));
        }
      }
    }
  };

  useEffect(() => {
    checkUrlForCountryCode();
  }, []);
  return <></>;
};

export default UrlChecker;
