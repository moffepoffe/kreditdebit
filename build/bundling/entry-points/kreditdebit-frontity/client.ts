import client from "@frontity/core/src/client";
import awsmin__f1_default from "@awsmin/f1/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__google_analytics_default from "@frontity/google-analytics/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import frontity__yoast_default from "@frontity/yoast/src/index";
import frontity_contact_form_7_default from "frontity-contact-form-7/src/index";

const packages = {
  awsmin__f1_default,
  frontity__wp_source_default,
  frontity__google_analytics_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  frontity__yoast_default,
  frontity_contact_form_7_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "@awsmin/f1/src/index",
      "@frontity/wp-source/src/index",
      "@frontity/google-analytics/src/index",
      "@frontity/tiny-router/src/index",
      "@frontity/html2react/src/index",
      "@frontity/yoast/src/index",
      "frontity-contact-form-7/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const awsmin__f1_default = require("@awsmin/f1/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const frontity__google_analytics_default = require("@frontity/google-analytics/src/index").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const frontity__html2react_default = require("@frontity/html2react/src/index").default;
      const frontity__yoast_default = require("@frontity/yoast/src/index").default;
      const frontity_contact_form_7_default = require("frontity-contact-form-7/src/index").default;
      const packages = {
        awsmin__f1_default,
        frontity__wp_source_default,
        frontity__google_analytics_default,
        frontity__tiny_router_default,
        frontity__html2react_default,
        frontity__yoast_default,
        frontity_contact_form_7_default,
      };
      client({ packages });
    }
  );
}