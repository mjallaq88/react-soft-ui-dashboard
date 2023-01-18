/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard React components
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import { useEffect } from "react";
function Socials() {
  function handleCallbackResponse(response) {
    console.log(response.credential);
  }

  useEffect(() => {
    /* global google */
    // google.accounts.id.initialize({
    //   client_id: "634789125173-6hdc50thuhop4m2a4m8nm0adrdbpjfsi.apps.googleusercontent.com",
    //   //callback: "https://localhost:7165/api/account/googlelogin",
    //   login_uri :"http://localhost:7165/api/account/googlelogin",
    //   ux_mode:"redirect"
    // });
    // google.accounts.id.renderButton(document.getElementById("signInDiv"),
    // {
    //   theme: "outline",
    //   size: "large",
    // });
    //google.accounts.id.prompt(); // display the one tag dialog
  });
  //data-callback ="handleCallbackResponse"
  //data-callback="https://localhost:7165/api/Account/googlelogin"
  return (
    <SoftBox display="flex" justifyContent="center">
      <SoftButton>
        <div
          id="g_id_onload"
          data-client_id=""
          data-context="signin"
          data-ux_mode="popup"
          data-login_uri ="https://localhost:7165/api/Account/googlelogin"
          data-auto_prompt="false"
        ></div>

        <div
          class="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
      </SoftButton>
    </SoftBox>
  );
}

export default Socials;
