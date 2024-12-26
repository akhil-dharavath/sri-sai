import * as React from "react";
import Badge from "@mui/material/Badge";

export default function SimpleBadge({ name, src, amount }) {
  const biggerBadge = amount === "15,000 M2" || amount === "10,000 M2";
  return (
    <Badge
      // className="equipment"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={amount}
      max={10000}
      color="primary"
      sx={{
        "& .MuiBadge-badge": {
          fontSize: biggerBadge ? 18 : 25,
          height: biggerBadge ? 70 : 65,
          width: biggerBadge ? 70 : 65,
          borderRadius: "50%",
          bottom: "28px",
          right: "28px",
          border: "2px solid white",
          padding: 3,
          textAlign: "center",
        },
      }}
    >
      {/* <img src={src} alt={name} width={300} /> */}
      <div className="equipment_container">
        <img src={src} alt={name} className="image" />
        <div className="overlay">
          <div className="text">{name}</div>
        </div>
      </div>
    </Badge>
  );
}
