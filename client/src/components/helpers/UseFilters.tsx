import React, { useState, useEffect } from "react";

export interface IPredictionData {
  game_date: string;
  away_predicted: string;
  away_team: string;
  favored_team: string;
  home_predicted: string;
  home_team: string;
  pick: string;
  vegas_line: string;
}

export interface IFilterOptions {
  favorite: Boolean;
  underdog: Boolean;
}

export const toggleModal = (
  setOpenFilterModal: React.Dispatch<React.SetStateAction<boolean>>
) => setOpenFilterModal(prev => !prev);

export const clearFilter = (
  setFilters: React.Dispatch<React.SetStateAction<IFilterOptions>>
) => setFilters({ favorite: false, underdog: false });

const useFilters = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openPopUpDialog, setOpenPopUpDialog] = useState<boolean>(false);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [displayFetchError, setDisplayFetchError] = useState<boolean>(false);
  const [displayedPredictionData, setDisplayedPredictionData] = useState<
    IPredictionData[] | null
  >(null);
  const [completePredictionData, setCompletePredictionData] = useState<
    IPredictionData[] | null
  >(null);
  const [filters, setFilters] = useState<IFilterOptions>({
    favorite: false,
    underdog: false,
  });

  const filterPredictionResults = (
    displayedPredictionData: IPredictionData[],
    filters: IFilterOptions
  ) => {
    if (filters.favorite) {
      return displayedPredictionData.filter(game => game.pick.includes("-"));
    }
    if (filters.underdog) {
      return displayedPredictionData.filter(game => game.pick.includes("+"));
    }
    return displayedPredictionData;
  };

  const closePopUpDialog = () => {
    setDisplayedPredictionData(completePredictionData);
    clearFilter(setFilters);
    setOpenPopUpDialog(false);
  };

  const fetchGamePredictions = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, { method: "GET" });
      const predictions: IPredictionData[] = await response.json();
      if (!Array.isArray(predictions) || !predictions?.length) {
        setDisplayedPredictionData(null);
        setDisplayFetchError(true);
        setIsLoading(false);
        return;
      }
      setDisplayFetchError(false);
      setCompletePredictionData(predictions);
      const filtered = filterPredictionResults(predictions, filters);
      if (!filtered.length) {
        setOpenPopUpDialog(true);
      } else {
        setDisplayedPredictionData(filterPredictionResults(predictions, filters));
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!completePredictionData || !completePredictionData.length) {
      setIsLoading(false);
      return;
    }
    const filtered = filterPredictionResults(completePredictionData, filters);
    if (!filtered.length) {
      setOpenPopUpDialog(true);
      return;
    }
    setDisplayedPredictionData(filtered);
  }, [filters]);

  return {
    isLoading,
    setIsLoading,
    openPopUpDialog,
    setOpenPopUpDialog,
    displayedPredictionData,
    setDisplayedPredictionData,
    completePredictionData,
    setCompletePredictionData,
    filters,
    setFilters,
    openFilterModal,
    setOpenFilterModal,
    displayFetchError,
    setDisplayFetchError,
    closePopUpDialog,
    fetchGamePredictions,
  };
};

export default useFilters;
