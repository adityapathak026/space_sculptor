import { LETTER_PATTERN } from "../common/constants";

export const handleKeyDown = (event) => {
  if (!LETTER_PATTERN.test(event.key)) {
    event.preventDefault();
  }
};

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
export const MAX_DATE = `${year}-${month}-${day}`;
