import React from "react";
import fbIcn from "../img/fbIcon.png";
import ytIcn from "../img/ytIcon.png";
import igIcn from "../img/instaIcon.png";
import tyIcn from "../img/twtIcon.png";
export default function Footer(porps) {
  return (
    <footer>
      <div>
        <div>
          <label>INFORMATION</label>
          <a href="# ">Plans</a>
          <a href="# ">Jobs</a>
          <a href="# ">Become a partner</a>
          <a href="# ">Become a beneficed</a>
        </div>
        <div>
          <label>LEGAL</label>
          <a href="# ">Terms & conditions</a>
          <a href="# ">License Agreement</a>
          <a href="# ">Privacy policy</a>
          <a href="# ">Copyright information</a>
        </div>
        <div>
          <label>SOCIAL MEDIA</label>
          <div class="social">
            {/*eslint-disable-next-line*/}
            <a href="#">
              <img src={fbIcn} alt="facebook" />
            </a>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <img src={igIcn} alt="instagram" />
            </a>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <img src={ytIcn} alt="youtube" />
            </a>
            {/*eslint-disable-next-line*/}
            <a href="#">
              <img src={tyIcn} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p>
        Copyright &#169; 2010-2020 BOBTech Company S.L. All rights reserved.
      </p>
    </footer>
  );
}
