import moment from "moment/moment";
import "moment/locale/tr";

const formatDate = (unixTime) => {
  if (unixTime === 0 || !unixTime) return "Bilinmiyor";
  const formatted = new Date(unixTime * 1000);

  return moment(formatted).calendar();
};
export default formatDate;
