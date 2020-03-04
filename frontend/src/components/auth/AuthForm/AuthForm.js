import React, { useContext } from "react";
import styles from "./AuthForm.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { I18nContext } from "../../../i18n";
import LanguageSelect from "../../common/LanguageSelect";

const cx = classNames.bind(styles);

const AuthForm = ({
  kind,
  onChangeInput,
  username,
  password,
  onLogin,
  onRegister,
  error
}) => {
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      switch (kind) {
        case "register":
          onRegister();
          return;
        case "login":
          onLogin();
          return;
        default:
          return;
      }
    }
  };

  const { translate } = useContext(I18nContext);

  return (
    <div className={cx("auth-form")}>
      <LanguageSelect />
      <div className={cx("title")}>{kind.toUpperCase()}</div>
      <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-title")}>{translate('username')}</div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-title")}>{translate('password')}</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      {kind === "register" ? (
        <div className={cx("auth-button")} onClick={onRegister}>
          {kind.toUpperCase()}
        </div>
      ) : (
        <div className={cx("auth-button")} onClick={onLogin}>
          {/* {kind.toUpperCase()} */}
          {translate('login').toUpperCase()}
        </div>
      )}
      {kind === "register" ? (
        <Link to={`/auth/login`} className={cx("description")}>
          if you already have account...
        </Link>
      ) : (
        <Link to={`/auth/register`} className={cx("description")}>
          if you don't have an account...
        </Link>
      )}
    </div>
  );
};

export default AuthForm;
