import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaBars } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import Cookies from "js-cookie";
import { Button, Input } from "reactstrap";
import toast from "react-hot-toast";
// icons
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { serverAddress } from "../../functions/ServerAddress";
import { CircularProgress } from "@mui/material";
import Modal from '@mui/material/Modal';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ButtonSwitch from "../../components/ButtonSwitch/ButtonSwitch";
import { darkHeader, darkText1, darkText2, darkText3, darkText4, lightHeader, lightText1, lightText2, lightText3, darkBackground3 } from "../../functions/Colors";
import { darkBackground2 } from "../../functions/Colors";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MenuIcon from '@mui/icons-material/Menu';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderStyle: 'none',
  borderRadius: '16px'
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(to right, #1a237e, #311b92)",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem 1rem",
});

const LogoSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const NavSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const StyledButton = styled(Button)({
  color: "#fff",
  background: "rgba(255, 255, 255, 0.1)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.2)",
  },
});

const Logout = () => {
  Cookies.remove("access");
  Cookies.remove("refresh");
  window.location.assign("/");
};

const Header = ({ IsLightMode, setIsLightMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [ProfileBox, setProfileBox] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const [ThemeBox, setThemeBox] = useState(null);

  const [Name, setName] = useState(true);
  const [ChangePassword, SetChangePassword] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [RollName, setRollName] = useState(true);

  const handleProfileBoxClick = (event) => {
    setProfileBox(event.currentTarget);
  };
  const handleThemeBoxClick = (event) => {
    setThemeBox(event.currentTarget);
  };
  const handleMobileMenuClick = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };
  const handleProfileBoxClose = () => {
    setMobileMenuAnchor(null);
    setProfileBox(null);
  };
  const handleThemeBoxClose = () => {
    setThemeBox(null);
  };
  useEffect(() => {
    setName(`${Cookies.get("name")} ${Cookies.get("lastname")}`);
    setRollName(`${Cookies.get("roll_name")}`);
  }, []);
  const changePassword = () => {
    const oldPasswordField = document.getElementById("oldPasswordField").value;
    const newPasswordField = document.getElementById("newPasswordField").value;
    const duplicatedPasswordField = document.getElementById(
      "duplicatedPasswordField"
    ).value;
    SetLoading(true);
    if (newPasswordField === duplicatedPasswordField) {
      axios
        .put(
          `${serverAddress}/accounts/change_password/`,
          {
            old_password: oldPasswordField,
            password: newPasswordField,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("access")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          SetLoading(false);
          try {
            if (response.data.Success === true) {
              SetChangePassword(false);
              return toast.success("رمز عبور با موفقیت تغییر کرد.", {
                position: "bottom-left",
              });
            }
          } catch (error) { }
        })
        .catch((err) => {
          SetLoading(false);
          if (err.response.status === 403) {
            Cookies.set("refresh", "");
            Cookies.set("access", "");
            window.location.assign("/");
          }
          if (err.response.status === 401) {
            Cookies.set("refresh", "");
            Cookies.set("access", "");
            window.location.assign("/");
          }
          try {
            if (
              err.response.data.password[0] ===
              "Password should have at least one uppercase letter."
            ) {
              return toast.error(
                "رمز انتخاب شده باید حداقل یک حرف بزرگ داشته باشد.",
                {
                  position: "bottom-left",
                }
              );
            }
          } catch (error) { }
          try {
            if (
              err.response.data.password[0] ===
              "Password should have at least one symbolic character."
            ) {
              return toast.error(
                "رمز انتخاب شده باید حداقل یک نماد داشته باشد.",
                {
                  position: "bottom-left",
                }
              );
            }
          } catch (error) { }
          try {
            if (
              err.response.data.password[0] ===
              "Password should have at least one lowercase letter."
            ) {
              return toast.error(
                "رمز انتخاب شده باید حداقل از یک حرف کوچک تشکیل شده باشد.",
                {
                  position: "bottom-left",
                }
              );
            }
          } catch (error) { }
          try {
            if (
              err.response.data.old_password.old_password ===
              "Old password is not correct"
            ) {
              return toast.error("رمز عبور قبلی خود را به درستی وارد کنید!", {
                position: "bottom-left",
              });
            }
          } catch (error) { }
          try {
            if (
              err.response.data.password[0] ===
              "Password should be at least 8 characters."
            ) {
              return toast.error(
                "رمز عبور باید حداقل از 8 کاراکتر تشکیل شده باشد.",
                {
                  position: "bottom-left",
                }
              );
            }
          } catch (error) { }
          return toast.error("خطا در انجام فرایند", {
            position: "bottom-left",
          });
        });
    } else {
      SetLoading(false);
      document.getElementById("newPasswordField").style.borderColor = "red";
      document.getElementById("duplicatedPasswordField").style.borderColor =
        "red";
      return toast.error("عدم تطابق رمز عبور های وارد شده", {
        position: "bottom-left",
      });
    }
  };

  return (
    <div>
      <StyledAppBar position="static"
        style={{
          boxShadow: IsLightMode ? 'rgba(10, 10, 10, 0.2) 0px 1px 0px, rgba(10, 10, 10, 0.2) 0px 2px 0px inset' : 'rgba(240, 241, 245, 0.2) 0px 1px 0px, rgba(255, 255, 255, 0.2) 0px 2px 0px inset',
          height: '45px',
          background: IsLightMode ? lightHeader : darkHeader
        }}>
        <StyledToolbar style={{ maxWidth: '1500px', width: '100%', margin: '-10px auto',
          padding:'0px' }} >
          <LogoSection sx={{ marginTop: { xs: "10px", sm: "0px" } }}>
            <img src="/images/bahman_logo.png" style={{ width: "40px" }} />

            <Typography
              variant="h6"
              component="div"
              style={{ fontSize: '17px', color: IsLightMode ? null : darkText3 }}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              نیک‌چین
            </Typography>
          </LogoSection>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMobileMenuClick} style={{ marginTop: '10px' }}>
                <FaBars />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    backgroundColor: IsLightMode ? 'white' : darkBackground2
                  },
                }}
              >
                <div
                  className="p-2"
                  style={{ color: "rgb(80,80,80)", minWidth: '300px' }}
                >
                  <ButtonSwitch setIsLightMode={setIsLightMode} IsLightMode={IsLightMode} />
                </div>
                <MenuItem
                  onClick={() => {
                    window.location.assign('/panel')
                  }}
                  sx={{
                    color: IsLightMode ? lightText3 : darkText3,
                    // حالت هاور
                    '&:hover': {
                      background: IsLightMode ? '#f5f5f5' : darkBackground3,
                      color: IsLightMode ? lightText1 : darkText1,
                    },
                  }}
                >
                  <SpaceDashboardIcon style={{ marginLeft: "4px" }} />
                  داشبورد
                </MenuItem>
                {
                  Cookies.get('roll') === '2' ?
                    <MenuItem
                      onClick={() => {
                        window.location.assign('/admin')
                      }}
                      sx={{
                        color: IsLightMode ? lightText3 : darkText3,
                        // حالت هاور
                        '&:hover': {
                          background: IsLightMode ? '#f5f5f5' : darkBackground3,
                          color: IsLightMode ? lightText1 : darkText1,
                        },
                      }}
                    >
                      <SupervisorAccountIcon style={{ marginLeft: "4px" }} />
                      پنل ادمین
                    </MenuItem>
                    :
                    null
                }

                <MenuItem
                  onClick={() => {
                    handleProfileBoxClose(), SetChangePassword(true);
                  }}
                  sx={{
                    color: IsLightMode ? lightText3 : darkText3,
                    // حالت هاور
                    '&:hover': {
                      background: IsLightMode ? '#f5f5f5' : darkBackground3,
                      color: IsLightMode ? lightText1 : darkText1,
                    },
                  }}
                >
                  <LockIcon style={{ marginLeft: "4px" }} />
                  تغییر رمز عبور
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleProfileBoxClose(), Logout();
                  }}
                  sx={{
                    color: IsLightMode ? lightText3 : darkText3,
                    // حالت هاور
                    '&:hover': {
                      background: IsLightMode ? '#f5f5f5' : darkBackground3,
                      color: IsLightMode ? lightText1 : darkText1,
                    },
                  }}
                >
                  <LogoutIcon style={{ marginLeft: "4px" }} />
                  خروج از حساب کاربری
                </MenuItem>
              </Menu>
            </>
          ) : (
            <NavSection>
              <StyledButton
                aria-controls="category-menu2"
                aria-haspopup="true"
                style={{ background: "none", borderStyle: "none", marginTop: '-0px' }}
                onClick={handleThemeBoxClick}
              >
                {
                  IsLightMode ?
                    <WbSunnyIcon style={{ fontSize: "24px", marginLeft: "-16px", color: IsLightMode ? null : darkText3 }} />
                    :
                    <BedtimeIcon style={{ fontSize: "24px", marginLeft: "-16px", color: IsLightMode ? null : darkText3 }} />
                }
              </StyledButton>
              <Menu
                id="category-menu2"
                anchorEl={ThemeBox}
                open={Boolean(ThemeBox)}
                onClose={handleThemeBoxClose}
                PaperProps={{
                  sx: {
                    backgroundColor: IsLightMode ? 'white' : darkBackground2
                  },
                }}
              >
                <ButtonSwitch setIsLightMode={setIsLightMode} IsLightMode={IsLightMode} />

              </Menu>
              <StyledButton
                aria-controls="category-menu2"
                aria-haspopup="true"
                style={{ background: "none", borderStyle: "none", marginTop: '-0px' }}
                onClick={handleProfileBoxClick}
              >
                <MenuIcon style={{ fontSize: "24px", marginLeft: "-16px", color: IsLightMode ? null : darkText3 }} />

              </StyledButton>
              <Menu
                id="category-menu2"
                anchorEl={ProfileBox}
                open={Boolean(ProfileBox)}
                onClose={handleProfileBoxClose}
                PaperProps={{
                  sx: {
                    backgroundColor: IsLightMode ? 'white' : darkBackground2,
                    minWidth:'200px'
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    window.location.assign('/panel')
                  }}
                  sx={{
                    color: IsLightMode ? lightText3 : darkText3,
                    marginLeft:"8px",
                    marginRight:'8px',
                    borderRadius:'4px',
                    // حالت هاور
                    '&:hover': {
                      background: IsLightMode ? '#dadddf' : "#353838",
                      color: IsLightMode ? lightText1 : darkText3,
                    },
                  }}
                >
                  <SpaceDashboardIcon style={{ marginLeft: "4px" }} />
                  داشبورد
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.assign('/panel')
                  }}
                  sx={{
                    color: IsLightMode ? lightText3 : darkText3,
                    marginLeft:"8px",
                    marginRight:'8px',
                    borderRadius:'4px',
                    // حالت هاور
                    '&:hover': {
                      background: IsLightMode ? '#dadddf' : "#353838",
                      color: IsLightMode ? lightText1 : darkText3,
                    },
                  }}
                >
                  <SpaceDashboardIcon style={{ marginLeft: "4px" }} />
                  داشبورد
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.assign('/panel')
                  }}
                  sx={{
                    color: IsLightMode ? lightText3 : darkText3,
                    marginLeft:"8px",
                    marginRight:'8px',
                    borderRadius:'4px',
                    // حالت هاور
                    '&:hover': {
                      background: IsLightMode ? '#dadddf' : "#353838",
                      color: IsLightMode ? lightText1 : darkText3,
                    },
                  }}
                >
                  <SpaceDashboardIcon style={{ marginLeft: "4px" }} />
                  داشبورد
                </MenuItem>
              </Menu>
            </NavSection>

          )}

        </StyledToolbar>
      </StyledAppBar>

      <Modal
        keepMounted
        open={ChangePassword}
        onClose={() => SetChangePassword(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h6 style={{ fontWeight: "bold" }}>تغییر رمز عبور</h6>
          <span style={{ color: "gray", fontSize: "14px" }}>
            رمز عبور قدیمی
          </span>
          <Input id="oldPasswordField" type="password" className="mb-3" />
          <span style={{ color: "gray", fontSize: "14px" }}>رمز عبور جدید</span>
          <Input id="newPasswordField" className="mb-3" type="password" />
          <span style={{ color: "gray", fontSize: "14px" }}>
            تکرار رمز عبور جدید
          </span>
          <Input id="duplicatedPasswordField" type="password" />
          <Button
            className="mt-3"
            style={{ height: "37px", width: "100%" }}
            onClick={() => {
              changePassword();
            }}
          >
            {Loading ? <CircularProgress size="20px" color="dark" /> : "تغییر"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
