import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return <time dateTime={dateString}>{year + "年" + month + "月" + day + "日"}</time>;
}
