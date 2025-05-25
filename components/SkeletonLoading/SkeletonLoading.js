import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
export default function SkeletonLoading({IsLightMode}) {
  return (
    <div style={{ textAlign: "center", marginBottom:'10px' }}>
      <Skeleton width="100%" height="35px" style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      <Skeleton width="70%" height="35px"  style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      <Skeleton width="90%" height="35px"  style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      <Skeleton width="60%" height="35px"  style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      <Skeleton width="80%" height="35px"  style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      <Skeleton width="90%" height="35px"  style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      <Skeleton width="70%" height="35px"  style={{background : IsLightMode ? 'rgb(200,200,200)' :'rgb(70,70,70)'}} />
      {/* <div style={{width:'100%', marginTop:'-150px'}}>
      </div> */}
    </div>
  );
}
