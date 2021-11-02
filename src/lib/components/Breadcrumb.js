import { emphasize } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Chip from "./Chip";
import { Link } from "react-router-dom";

const Breadcrumb = ({ label, to, disabled, ...rest }) => {
  const s = label.length > 40 ? label.substring(0, 40) + "..." : label;
  return (
    <Link
      style={{
        marginBottom: "4px",
        display: "flex",
        textDecoration: "none",
        pointerEvents: disabled ? "none" : "auto",
      }}
      to={to || ""}
    >
      <Chip
        label={s}
        {...rest}
        disabled={disabled}
        sx={{
          m: 0,
          cursor: "pointer",
          backgroundColor: grey[200],
          color: grey[800],
          fontWeight: "typography.fontWeightRegular",
          "&:hover, &:focus": {
            backgroundColor: grey[400],
          },
          "&:active": {
            boxShadow: (theme) => theme.shadows[1],
            backgroundColor: emphasize(grey[400], 0.12),
          },
        }}
      />
    </Link>
  );
};

export default Breadcrumb;
