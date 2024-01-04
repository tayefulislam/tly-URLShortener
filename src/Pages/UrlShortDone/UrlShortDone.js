import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const UrlShortDone = () => {
  let { shortUrlId } = useParams();
  console.log(shortUrlId);

  const url = `http://localhost:5000/api/v1/urlShortener/${shortUrlId}`;

  const { isLoading, data } = useQuery("recent-requests", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) return <h1></h1>;

  console.log(data?.fullLink);

  if (data?.fullLink) return window.location.replace(`${data?.fullLink}`);

  return (
    <div>Error !!! Redirect can't possible try again letter . Thank you</div>
  );
};
//
export default UrlShortDone;
