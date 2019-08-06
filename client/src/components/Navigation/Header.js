import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";
import { ButtonPrimary, ButtonSecondary } from "../../components/UI/Button/Buttons";
import { small_space, large_space } from "../../util/variables/spacing";
import logo from "../../assets/logo.png";
import { tablet_max_width } from "../../util/variables/media-queries";


class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return;
      case null:
        return [
          <li key="1">
            <Link to="/login">
              <ButtonSecondary>Login</ButtonSecondary>
            </Link>
          </li>,
          <li key="2">
            <Link to="/signup">
              <ButtonPrimary className="last-button">Sign Up</ButtonPrimary>
            </Link>
          </li>
        ];
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <StyledHeader>
        <nav>
            <Link to={this.props.auth ? "/dashboard" : "/"}>
              <div className="LogoIcon">
                <img src={logo} alt="Droom Logo" />
              </div>
            </Link>
            <ul>{this.renderContent()}</ul>
        </nav>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  border-bottom: 1px solid #eaeaea;

  nav {
    display: flex;
    height: 12vh;
    min-height: 60px;
    max-height: 90px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${small_space};
    justify-content: space-between;
    /* align-items: center; */

    .last-button {
      margin-left: ${large_space};
    }

    .LogoIcon {
      height: 50px;
      margin-right: 16px;
      padding-right: 16px;

      img {
        height: inherit;
      }
    }

    ul {
      display: flex;
      justify-items: right;
      align-items: right;
      color: red;

      li {
        list-style: none;
      }
    }

    @media only screen and (max-width: ${tablet_max_width}) {
      button {
        display: none;
      }
    }
  }
`;

const mapStateToProps = ({ auth }) => {
  console.log("auth", auth)
  return { auth };
};

export default connect(mapStateToProps)(Header);
