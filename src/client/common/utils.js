import {
  RESULTS_PER_PAGE
} from "./constants"

export const getTotalPages = (totalResults) => {
  return totalResults % RESULTS_PER_PAGE == 0 ?
    Math.floor(totalResults / 20) :
    Math.floor(totalResults / 20) + 1
}