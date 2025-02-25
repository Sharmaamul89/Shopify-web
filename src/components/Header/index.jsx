"use client";

import React, { useState } from "react";
import Image from 'next/image';
import styles from "./Header.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const currencies = [
  { code: "CAD", country: "Canada", flag: "Flags/ca.svg" },
  { code: "EUR", country: "France", flag: "Flags/fr.svg" },
  { code: "EUR", country: "Germany", flag: "Flags/de.svg" },
  { code: "JPY", country: "Japan", flag: "Flags/jp.svg" },
  { code: "NZD", country: "New Zealand", flag: "Flags/nz.svg" },
  { code: "GBP", country: "United Kingdom", flag: "Flags/gb.svg" },
  { code: "USD", country: "United States", flag: "Flags/us.svg" },
  { code: "VND", country: "Vietnam", flag: "Flags/vn.svg" },
];

const languages = [
  { code: "en", name: "English", flag: "/assets/Flags/us.svg" },
  { code: "fr", name: "Français", flag: "/assets/Flags/fr.svg" },
  { code: "de", name: "Deutsch", flag: "/assets/Flags/de.svg" },
  { code: "jp", name: "日本語", flag: "/assets/Flags/jp.svg" },
];

const Header = () => {
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    country: "United States",
    flag: "/assets/Flags/us.svg",
  });

  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    name: "English",
    flag: "/assets/Flags/us.svg",
  });

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen((prev) => !prev);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
    setIsCurrencyDropdownOpen(false);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyDropdownOpen(false);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <FaPhone className={styles.contacticon} />{" "}
        <span className={styles.contact}>+01 23456789</span>
        <FaEnvelope className={styles.mailicon} />{" "}
        <span className={styles.mail}>Kalles@domain.com</span>
      </div>
      <div className={styles.center}>
        Summer sale discount off <span className={styles.highlight}>50%!</span>
        <a href="#" className={styles.shopNow}>
          Shop Now
        </a>
      </div>
      <div className={styles.right}>
        <FaMapMarkerAlt className={styles.icon} />{" "}
        <span className={styles.location}>Location</span>
        {/* Language Selector */}
        <span className={styles.language} onClick={toggleLanguageDropdown}>
          <Image
            height={16}
            width={16}
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
          />{" "}
          {selectedLanguage.name} &#9662;
        </span>
        {isLanguageDropdownOpen && (
          <ul className={styles.dropdownList}>
            {languages.map((language) => (
              <li
                key={language.code}
                className={styles.dropdownItem}
                onClick={() => selectLanguage(language)}
              >
                <Image
                  height={16}
                  width={16}
                  loading="lazy"
                  decoding="async"
                  src={language.flag}
                  alt={language.name}
                />{" "}
                {language.name}
              </li>
            ))}
          </ul>
        )}
        {/* Currency Selector */}
        <span className={styles.flag} onClick={toggleCurrencyDropdown}>
          <Image
            height={16}
            width={16}
            src={selectedCurrency.flag}
            alt={selectedCurrency.country}
          />{" "}
          {selectedCurrency.code} &#9662;
        </span>
        {isCurrencyDropdownOpen && (
          <ul className={styles.dropdownList}>
            {currencies.map((currency) => (
              <li
                key={currency.code + currency.country}
                className={styles.dropdownItem}
                onClick={() => selectCurrency(currency)}
              >
                <Image
                  height={20}
                  width={20}
                  src={currency.flag}
                  alt={currency.country}
                />{" "}
                {currency.country} - {currency.code}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;