import { IMG_URL } from "../utils/constants";

const ResComponent = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            IMG_URL +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

  export default ResComponent;