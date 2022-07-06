/* eslint-disable max-len */
/* eslint-disable no-tabs */
module.exports.sendPassword = (name, validation) => `
<style>body *{
  font-family:'Open Sans',Arial,sans-serif !important;
  color: #2b2b2b;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
  color: #2b2b2b;
}
.im {
  color: #545454;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
  color: #2b2b2b;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}  
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
@media only screen and (max-width: 640px){
    body body{
      width:auto !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=full]{
      width:100% !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=mobile]{
      width:100% !important;
      padding-left:20px;
      padding-right:20px;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body [class=erase]{
      display:none;
    }
}	
@media only screen and (max-width: 640px){
    body [class=buttonScale]{
      float:none !important;
      text-align:center !important;
      display:inline-block !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image600 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image230]{
      width:230px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image298 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    table[class=image110]{
      text-align:center;
      float:none;
      width:70% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=pad30]{
      padding-left:25px !important;
      padding-right:25px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image298] img{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .h30{
      width:100% !important;
      height:30px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h15{
      width:100% !important;
      height:15px !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=sponsor]{
      text-align:center;
      float:none;
      width:80% !important;
    }
}	
@media only screen and (max-width: 640px){
    body .w10{
      width:8% !important;
      height:10px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .pad20{
      padding-left:20px !important;
      padding-right:20px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h65{
      width:100%;
      height:65px !important;
    }
}</style>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
<tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;"><!-- [if gte mso 9]>
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
          <v:fill type="tile" src="images/5a2ddcd490a50untitled-2.png" ></v:fill>
          <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
    <div style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
      <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; width: 94.979%; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
        <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; width: 100%; background: #000000;" align="center"><!-- Nav Mobile Wrapper -->
              <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" width="100%">
                      <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; background: #000000;" width="100%" height="70">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; background: #000000;" width="100%" height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
<!-- Text -->
                      <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; width: 648px; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td class="font32" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 46px; color: #ffffff; text-align: center; line-height: 56px; font-weight: bold; vertical-align: top; width: 648px; background: #000000;" align="center">
                              <span class="font44" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff;">Welcome!</span> 
                              <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                              <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                              <span class="font44" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">We're glad to have you abroad</span> 
                              <span class="font44" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">...we're here to help you.</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;">
                      <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                    </td>
                  </tr>
                  <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;">
                      <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if gte mso 9.]>
          </v:textbox>
        </v:fill>
      </v:rect>
      <![endif]-->
  </td>
</tr>
</tbody>
</table>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background-color: #f6f6f6; z-index: 99999; top: 0px; left: 0px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#F6F6F6">
<tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
    <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; width: 59.375%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
      <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; width: 100%;" align="center">
            <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 501px; width: 368px;" border="0" width="456" cellspacing="0" cellpadding="0" align="center">
              <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  <td style="-webkit-font-smoothing: antialiased; word-break: break-word; width: 367.5px; font-family: 'Open Sans', Arial, sans-serif !important;" align="center">
                    <table class="fullCenter" style="-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 769px; height: 298px; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="310" cellspacing="0" cellpadding="0" align="left">
                      <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 232px;">
                          <td class="fullCenter" style="-webkit-font-smoothing: antialiased; word-break: break-word; text-align: left; font-size: 14px; color: #828282; line-height: 22px; font-weight: 400; height: 232px; width: 768.333px; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">
                            <p data-renderer-start-pos="550">
                              <strong>Hello ${name},</strong>
                            </p>
                            <p data-renderer-start-pos="564">Congratulations! Youve successfully been signed up for DabaTech UI!</p>
                            <p data-renderer-start-pos="631">Now it's time to activate your account so that you can start reaching our features:</p>
                            <ol class="ak-ol">
                              <li>
                                <p data-renderer-start-pos="718">Sign in to your account at 
                                  <a class="sc-VuRhl lmAaUx" href="${process.env.REACT_APP_API_URL}/validate/${validation._id}" data-renderer-mark="true">${process.env.REACT_APP_API_URL}/validate/${validation._id}</a>
                                </p>
                              </li>
                       </ol>
                            <ul class="ak-ul">
                              <li>
                                <p data-renderer-start-pos="778">use this current email you're using to login</p>
                              </li>
                            </ul>
                            </ol>
                            <p data-renderer-start-pos="931">We're delighted to welcome you to DabaTech UI</p>
                            <br>
                            <center>
                            <p data-renderer-start-pos="976">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; See you online, 
                            <br>
                            </p>
                            <p style="-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="449">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Have a great day!</p>
                            <p style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="497">&nbsp;</p>
                            </center>
                          </td>
                        </tr>
                        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                          <td class="buttonScale" style="-webkit-font-smoothing: antialiased; word-break: break-word; width: 768.333px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important;" align="left">&nbsp;</td>
                        </tr>
                        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 56px;">
                          <td style="-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 768.333px; height: 56px; text-align: center; font-family: 'Open Sans', Arial, sans-serif !important;" height="65">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                    <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #ffc845;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#FAC32E">
<tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
    <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 128px; width: 574px;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
      <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 98px;">
          <td class="logo" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 98px; width: 573.333px;" align="center">
            <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="20">&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <table class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; text-align: center; width: 90.8333%; height: 73px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 0px;">
                  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 100%; height: 0px;" width="100%" height="1">&nbsp;</td>
                </tr>
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 48px;">
                  <td class="fullCenter" style="font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 13px; color: #ffffff; line-height: 26px; font-weight: 400; width: 100%; height: 48px;" width="100%">Regards, 
                    <br style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">DabaTech UI Team Developers
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
          <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">
            <table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="10">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
          <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">&nbsp;</td>
        </tr>
        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
          <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;">&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
<table class="full" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
<tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" valign="top" width="100%">
    <table class="mobile" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
      <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
        <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; background: #000000;" align="center" width="100%">
            <table class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; text-align: center; height: 74px; width: 100%; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 25px;">
                  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 25px; background: #000000;" width="100%" height="25">&nbsp;</td>
                </tr>
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 15px;">
                  <td class="fullCenter" style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 12px; color: #a1a6a7; font-weight: 400; height: 15px; background: #000000;" width="100%">&nbsp;</td>
                </tr>
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 24px;">
                  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 24px; background: #000000;" width="100%" height="24">&nbsp;</td>
                </tr>
                <tr style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                  <td style="font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; height: 10px; background: #000000;" width="100%" height="1">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
`;

module.exports.sendResetLink = (email, id) => `
<style style="-webkit-font-smoothing:antialiased;">body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
.ii a[href] {
  color: #fff;
text-decoration: none;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
body *{
  font-family:'Open Sans',Arial,sans-serif !important;
}
div,p,a,li,td{
  -webkit-text-size-adjust:none;
}
*{
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
td{
  word-break:break-word;
}
a{
  word-break:break-word;
  text-decoration:none;
  color:inherit;
}
body{
  width:100%;
  height:100%;
  background-color:#ffffff;
  margin:0;
  padding:0;
  -webkit-font-smoothing:antialiased;
}
html{
  background-color:#ffffff;
  width:100%;
}
body p{
  padding:0 !important;
  margin-top:0 !important;
  margin-right:0 !important;
  margin-bottom:0 !important;
  margin-left:0 !important;
}
body img{
  user-drag:none;
  -moz-user-select:none;
  -webkit-user-drag:none;
}
body .hover:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body td img:hover{
  opacity:.85;
  filter:alpha(opacity=85);
}
body .underline:hover{
  text-decoration:underline !important;
}
body .hoverGreen img{
  opacity:1;
  transition:opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .hoverGreen img:hover{
  opacity:.1;
  filter:alpha(opacity=10)transition: opacity .4s ease-in-out;
  -moz-transition:opacity .4s ease-in-out;
  -webkit-transition:opacity .4s ease-in-out;
}
body .jump:hover{
  opacity:.75;
  filter:alpha(opacity=75);
  padding-top:10px !important;
}
body a.rotator img{
  -webkit-transition:all 1s ease-in-out;
  -moz-transition:all 1s ease-in-out;
  -o-transition:all 1s ease-in-out;
  -ms-transition:all 1s ease-in-out;
}
body a.rotator img:hover{
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  -ms-transform:rotate(360deg);
}
body #logo img{
  width:125px;
  height:auto;
}
body .logo125 img{
  width:125px;
  height:auto;
}
body #icon12 img{
  width:12px;
  height:auto;
}
body .icon75 img{
  width:75px;
  height:auto;
}
body .icon24 img{
  width:24px;
  height:auto;
}
body .icon36 img{
  width:36px;
  height:auto;
}
body .icon40 img{
  width:40px;
  height:auto;
}
body .image280 img{
  width:280px;
  height:auto;
}
body .image245 img{
  width:245px;
  height:auto;
}
body .image200 img{
  width:200px;
  height:auto;
}
body .image275 img{
  width:275px;
  height:auto;
}
body .image250 img{
  width:250px;
  height:auto;
}
body .image230 img{
  width:230px;
  height:auto;
}
body .image600 img{
  width:600px;
  height:auto;
}
body .image135 img{
  width:135px;
  height:auto;
  -webkit-border-radius:4px;
  -moz-border-radius:4px;
  border-radius:4px;
}
body .avatar72 img{
  width:72px;
  height:auto;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  border-radius:3px;
}
@media only screen and (max-width: 640px){
    body body{
      width:auto !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=full]{
      width:100% !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=mobile]{
      width:100% !important;
      padding-left:20px;
      padding-right:20px;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=fullCenter]{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body [class=erase]{
      display:none;
    }
}	
@media only screen and (max-width: 640px){
    body [class=buttonScale]{
      float:none !important;
      text-align:center !important;
      display:inline-block !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image600 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image230]{
      width:230px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .image298 img{
      width:100% !important;
    }
}	
@media only screen and (max-width: 640px){
    table[class=image110]{
      text-align:center;
      float:none;
      width:70% !important;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=pad30]{
      padding-left:25px !important;
      padding-right:25px !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body td[class=image298] img{
      width:100% !important;
      text-align:center !important;
      clear:both;
    }
}	
@media only screen and (max-width: 640px){
    body .h30{
      width:100% !important;
      height:30px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h15{
      width:100% !important;
      height:15px !important;
    }
}	
@media only screen and (max-width: 640px){
    body table[class=sponsor]{
      text-align:center;
      float:none;
      width:80% !important;
    }
}	
@media only screen and (max-width: 640px){
    body .w10{
      width:8% !important;
      height:10px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .pad20{
      padding-left:20px !important;
      padding-right:20px !important;
    }
}	
@media only screen and (max-width: 640px){
    body .h65{
      width:100%;
      height:65px !important;
    }
}</style>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
<tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;"><!-- [if gte mso 9]>
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">
          <v:fill type="tile" src="images/5a2ddcd490a50untitled-2.png" ></v:fill>
          <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
            <![endif]-->
    <div style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 94.979%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center"><!-- Nav Mobile Wrapper -->
              <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
                      <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="70">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>

                      <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
<!-- Text -->
                      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td class="font32" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 46px; color: #ffffff; text-align: center; line-height: 56px; font-weight: bold; vertical-align: top; width: 648px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                              <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff;">We're glad to have you back</span> 
                              <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                              <span class="font44" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-weight: 100;">...and to help you for sure.</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="50">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center"><!-- Button Center -->
                        <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                          <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center">
                              <table style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; width: 203px; height: 47px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; border-radius: 25px; padding-left: 25px; padding-right: 25px; font-weight: 400; color: #ffffff; background: #ffc845; width: 152.667px; height: 10px;" align="center" bgcolor="#FAC32E" height="41">
                                      <span style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: #ffffff; font-size: 16px; text-decoration: none; line-height: 41px;">
                                        <strong style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;" data-renderer-mark="true"><a style="text-decoration: "none";color: "white";" href="${process.env.REACT_APP_API_URL}/reset/${id}">REST PASSWORD</a></strong>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
<!-- End Button Center -->
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                      <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                    </td>
                  </tr>
                  <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                    <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                      <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<!-- [if gte mso 9.]>
          </v:textbox>
        </v:fill>
      </v:rect>
      <![endif]-->
  </td>
</tr>
</tbody>
</table>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background-color: #f6f6f6; z-index: 99999; top: 0px; left: 0px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#F6F6F6">
<tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
    <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; width: 59.375%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
      <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; width: 100%;" align="center">&nbsp;
            <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 501px; width: 368px;" border="0" width="456" cellspacing="0" cellpadding="0" align="center">
              <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; width: 367.5px;" align="center"><!-- Text Right -->
                    <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; border-collapse: collapse; width: 769px; height: 424px; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="310" cellspacing="0" cellpadding="0" align="left">
                      <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                          <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: left; font-size: 22px; color: #27272b; line-height: 28px; font-weight: bold; width: 768px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">&nbsp;</td>
                        </tr>
                        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; width: 768px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important;" height="25">&nbsp;</td>
                        </tr>
                        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 56px;">
                          <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 22px; color: #27272b; line-height: 28px; font-weight: bold; height: 56px; width: 768px; text-align: center; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">please follow the steps below to secure your account:</td>
                        </tr>
                        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 232px;">
                          <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: left; font-size: 14px; color: #828282; line-height: 22px; font-weight: 400; height: 232px; width: 768px; font-family: 'Open Sans', Arial, sans-serif !important;" valign="middle">
                            <p style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;margin-left:0px !important;margin-bottom:0px !important;margin-right:0px !important;margin-top:0px !important;padding-left:0px !important;padding-bottom:0px !important;padding-right:0px !important;padding-top:0px !important;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="58">(This link above is valid only for 7 days, if it's expird you can re-request for change and we'll be happy to send you a new link)</p>
Step 1: Once you've reset your password, update your password recovery options in your account 
                            <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">Step 2: Remember to sign in to all your devices associated to 
                            <a class="sc-zDqdV kOqhyL" href="mailto:%22jhon.smith@gmail.com" title="mailto:%22jhon.smith@gmail.com" data-renderer-mark="true" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;color:inherit;text-decoration:none;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; color: inherit; text-decoration: none; word-break: break-word;">"${email}</a>" with the new password 
                            <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                            <p style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;margin-left:0px !important;margin-bottom:0px !important;margin-right:0px !important;margin-top:0px !important;padding-left:0px !important;padding-bottom:0px !important;padding-right:0px !important;padding-top:0px !important;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="449">Have a great day!</p>
                            <p style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;margin-left:0px !important;margin-bottom:0px !important;margin-right:0px !important;margin-top:0px !important;padding-left:0px !important;padding-bottom:0px !important;padding-right:0px !important;padding-top:0px !important;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; padding: 0px !important; margin: 0px !important;" data-renderer-start-pos="497">&nbsp;</p>
                          </td>
                        </tr>

                        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 56px;">
                          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 768px; height: 56px; text-align: center; font-family: 'Open Sans', Arial, sans-serif !important;" height="65">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                    <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; background: #ffc845;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#FAC32E">
<tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word;" align="center" valign="top" width="100%">
    <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 128px; width: 574px;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
      <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 98px;">
          <td class="logo" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 98px; width: 573.333px;" align="center">
            <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="20">&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; text-align: center; width: 90.8333%; height: 73px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 0px;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; width: 100%; height: 0px;" width="100%" height="1">&nbsp;</td>
                </tr>
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 48px;">
                  <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: Helvetica, Arial, sans-serif, 'Open Sans'; -webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 13px; color: #ffffff; line-height: 26px; font-weight: 400; width: 100%; height: 48px;" width="100%">Regards, 
                    <br style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">DabaTech UI Team Developers*
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">
            <table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; border-collapse: collapse; height: 10px; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px;" width="100%" height="10">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;" align="center">&nbsp;</td>
        </tr>
        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; word-break: break-word; height: 10px; width: 573.333px;">&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
<table class="full" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; background: #000000; font-family: 'Open Sans', Arial, sans-serif !important;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#000000">
<tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
<tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" valign="top" width="100%">
    <table class="mobile" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
      <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
        <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
          <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" align="center" width="100%">
            <table class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;-webkit-font-smoothing: antialiased; text-align: center; height: 74px; width: 100%; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
              <tbody style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased;">
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 25px;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; height: 25px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="25">&nbsp;</td>
                </tr>
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 15px;">
                  <td class="fullCenter" style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; text-align: center; font-size: 12px; color: #a1a6a7; font-weight: 400; height: 15px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%">&nbsp;</td>
                </tr>
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 24px;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; height: 24px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="24">&nbsp;</td>
                </tr>
                <tr style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;font-family: 'Open Sans', Arial, sans-serif !important; -webkit-font-smoothing: antialiased; height: 10px;">
                  <td style="font-family:'Open Sans', Arial, sans-serif !important;-webkit-font-smoothing:antialiased;word-break:break-word;-webkit-font-smoothing: antialiased; word-break: break-word; font-size: 1px; line-height: 1px; height: 10px; font-family: 'Open Sans', Arial, sans-serif !important; background: #000000;" width="100%" height="1">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
</tbody>
</table>
`;

module.exports.newEP_LNS = () => `
<div dir="ltr">
  <br>
  <div class="gmail_quote">
    <div class="gmail_attr" dir="ltr">
      <br>
    </div>
    <div dir="ltr">
      <div class="gmail_quote">
        <div dir="ltr">
          <div class="gmail_quote">
            <div dir="ltr">
              <div class="gmail_quote">
                <div dir="ltr">
                  <u></u>
                  <div style="width: 100%; height: 100%; font-family: arial,'helvetica neue',helvetica,sans-serif; padding: 0; margin: 0;">
                    <div style="background-color: #037ef3;">
                      <table style="border-collapse: collapse; border-spacing: 0px; padding: 0; margin: 0; width: 100%; height: 100%; background-repeat: repeat; background-position: center top; background-color: #037ef3;" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr style="border-collapse: collapse;">
                            <td style="padding: 0; margin: 0;">
                              <table style="border-collapse: collapse; border-spacing: 0px; width: 600px;" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr style="border-collapse: collapse;">
                                    <td style="padding: 0; margin: 0; line-height: 1px; min-width: 600px;" height="0">
                                      <img style="display: block; border: 0; outline: none; text-decoration: none; max-height: 0px; min-height: 0px; min-width: 600px; width: 600px;" src="https://ci3.googleusercontent.com/proxy/mEwrBLRqRs4U3ih0k5bwvexxwbixRuiyxCpDdvF5a6Gs8XIJMxed2-RgcT-zgcGjse9m9272dPTp9X6kSFXHCyMJNFtQN6eivXkDbCfNPHk=s0-d-e1-ft#https://esputnik.com/repository/applications/images/blank.gif" alt="" width="600" height="1">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse;">
                            <td style="padding: 0; margin: 0;" valign="top">
                              <table style="border-collapse: collapse; border-spacing: 0px; table-layout: fixed!important; width: 100%; background-color: transparent; background-repeat: repeat; background-position: center top;" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr style="border-collapse: collapse;">
                                    <td style="padding: 0; margin: 0;" align="center">
                                      <table style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px;" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                                        <tbody>
                                          <tr style="border-collapse: collapse;">
                                            <td style="margin: 0; background-color: #ffffff; padding: 15px 20px 15px 20px;" align="left" bgcolor="#ffffff">
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 367px;" align="center">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0px;" align="left">
                                                              <a href="https://viewstripo.email" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                <img style="display: block; border: 0; outline: none; text-decoration: none;" src="https://ci5.googleusercontent.com/proxy/eTTkEoRslW-iPQPQLy9gbQiFcUo8EF5LkMt6NMSZK_h9NwuTtBj2sT8Bf6MDV0R-rArTNB9QbP8UUpmCcQersrM2l9XBQwDrJdhgCbKblob6XD37WX1f9T0DT9_8ptnBoLk0F5rZayzCHIg7uixKr8N9hCbObg09geyd0HFDvAXsM8x8Kg=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/CABINET_8b67208a5e2746774c2d68b4dc75f328/images/84081613083049213.png" width="173">
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 173px;" align="center">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0;" align="right">
                                                              <table style="border-collapse: collapse; border-spacing: 0px;" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                  <tr style="border-collapse: collapse;">
                                                                    <td style="padding: 0; margin: 0; padding-right: 10px;" align="center" valign="top">
                                                                      <a href="https://twitter.com/aiesec?lang=fr" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                        <img style="display: block; border: 0; outline: none; text-decoration: none;" title="Twitter" src="https://ci5.googleusercontent.com/proxy/NhbvjnkuDKLV_QJPUNMHPeOeTqnHjPVRxL3lEfcN-s0FbtFD72IVBu93aklcyzX0YMZSPewb5yT17BfqllOjBZMQseeuHoERICVFXWL0Sj7xBjB9-tefyCxVt9KYn96aMhbFmG725Hcz0UOnShTehUEU7GYsqKg=s0-d-e1-ft#https://stripo.email/cabinet/assets/editor/assets/img/social-icons/logo-black/twitter-logo-black.png" width="24" height="24">
                                                                      </a>
                                                                    </td>
                                                                    <td style="padding: 0; margin: 0; padding-right: 10px;" align="center" valign="top">
                                                                      <a href="https://www.facebook.com/AIESECglobal/" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                        <img style="display: block; border: 0; outline: none; text-decoration: none;" title="Facebook" src="https://ci4.googleusercontent.com/proxy/Yh7PXPoPmVD09L0zgMEQOcVoQXLpEBe9-CIYS_EY6R7kZNwEZyZg8VcF0LNUxAKs0G_YReywXbVoq73OC9k_ocGazl1mrMSmi9xmZGJkT9zI-4jQdrmAP0WQA9QhV3pAxSx7UqYfk_zVnHnqhAtb5WDt_iWP1Und=s0-d-e1-ft#https://stripo.email/cabinet/assets/editor/assets/img/social-icons/logo-black/facebook-logo-black.png" width="24" height="24">
                                                                      </a>
                                                                    </td>
                                                                    <td style="padding: 0; margin: 0;" align="center" valign="top">
                                                                      <a href="https://instagram.com/aiesecglobal" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                        <img style="display: block; border: 0; outline: none; text-decoration: none;" title="Instagram" src="https://ci4.googleusercontent.com/proxy/6ojYWN4mrKopnygbinI7LOyFgmkgI8JBLNVf6U5gwLVhlQEibHfWyNOSdVCNBtwwY9YWmiZNkrO5q4SFmBMmheGVnXYpirP-O7NSKcQ4Yh4nUC2EnkS_as4jeb7qZeTY-h0uaT6h9mdxh_3lDZxTBVNgn5Y_=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" width="24" height="24">
                                                                      </a>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table style="border-collapse: collapse; border-spacing: 0px; table-layout: fixed!important; width: 100%;" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr style="border-collapse: collapse;">
                                    <td style="padding: 0; margin: 0;" align="center">
                                      <table style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px;" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                                        <tbody>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 600px;" align="center" valign="top">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="center">
                                                              <a href="https://viewstripo.email" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #93c47d;" target="_blank" rel="noopener">
                                                                <img style="display: block; border: 0; outline: none; text-decoration: none;" title="" src="https://ci4.googleusercontent.com/proxy/Xy-qP5ZyDBYiC9adZ5Zd8DAAhV_2984lBDbbakGtKsmugnBKLwq6b0QBiKhIV6xRbeTdgoZcsVWNeUjUX-QBuN9kiJo63tDEOTiPD_5GWc5LIv9bUsR_TwYvkBm2vA4WNi2rp6_eMmPm8w=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/bannerImgGuid/images/77131613655702089.png" alt="" width="600">
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table style="border-collapse: collapse; border-spacing: 0px; table-layout: fixed!important; width: 100%;" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr style="border-collapse: collapse;">
                                    <td style="padding: 0; margin: 0;" align="center">
                                      <table style="border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                                        <tbody>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-left: 20px; padding-right: 20px; padding-top: 30px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 560px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <h1 style="margin: 0; line-height: 34px; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; font-size: 28px; font-style: normal; font-weight: normal; color: #333333;">Let's get started!</h1>
                                                            </td>
                                                          </tr>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; padding-top: 10px; padding-bottom: 10px;" align="left">
                                                              <p style="margin: 0px; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; line-height: 21px; color: #333333;">
                                                                <span style="font-size: large;">Congratulations on signing up with us! You are one step closer to living an unforgettable experience with AIESEC.</span>
                                                              </p>
                                                              <p style="margin: 0px; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; line-height: 21px; color: #333333;">
                                                                <span style="font-size: large;">Here are some informations about the next steps that will get you ready to start your brand new journey with us.</span>
                                                              </p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 10px; padding-left: 20px; padding-right: 20px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 560px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <span style="background: #037ef3; display: inline-block; border-radius: 4px; width: auto; border: 0px solid #e7e8e9;">
                                                                <a style="text-decoration: none; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; font-size: 14px; color: #ffffff; border-style: solid; border-color: #037ef3; border-width: 10px 20px 10px 20px; display: inline-block; background: #037ef3; border-radius: 4px; font-weight: normal; font-style: italic; line-height: 17px; width: auto; text-align: center;">Finish up your profile:</a>
                                                              </span>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 10px; padding-left: 20px; padding-right: 20px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <ul>
                                                                <li style="line-height: 21px; margin-bottom: 15px; color: #333333;">
                                                                  <span style="font-family: arial narrow, sans-serif; font-size: large;">Visit&nbsp; 
                                                                    <a href="http://aiesec.org" target="_blank" rel="noopener">aiesec.org</a>.
                                                                  </span>
                                                                </li>
                                                                <li style="line-height: 21px; margin-bottom: 15px; color: #333333;">
                                                                  <span style="font-family: arial narrow, sans-serif; font-size: large;">Create your own profile.</span>
                                                                </li>
                                                                <li style="line-height: 21px; margin-bottom: 15px; color: #333333;">
                                                                  <span style="font-family: arial narrow, sans-serif; font-size: large;">Fill out your informations.</span>
                                                                </li>
                                                              </ul>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0px;" align="center">
                                                              <img style="display: block; border: 0; outline: none; text-decoration: none;" src="https://ci4.googleusercontent.com/proxy/e7Q1PBVQDb2ZI97nFIdhxUdfuJREmXCdHCjeGL3lfwQxuWgWbh-YiyODHeQu8IKmONAHK92uKifLStHMXX1nQaRQ1X2DRiiRO3O5Ke2znQp80lBmNgDfzJshLrmt_pAwtZsh17G-mbjhh--ImmSviEsqUp6G0AzJtHQRfCTEULjoB2R4Fg=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/CABINET_d311a5e6ed48b5c8a505f31adfc15071/images/84521613653938791.png" alt="" width="125">
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 15px; padding-left: 20px; padding-right: 20px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 560px;" align="center" valign="top">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <span style="background: #037ef3; display: inline-block; border-radius: 4px; width: auto; border: 0px solid #e7e8e9;">
                                                                <a style="text-decoration: none; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; font-size: 14px; color: #ffffff; border-style: solid; border-color: #037ef3; border-width: 10px 20px 10px 20px; display: inline-block; background: #037ef3; border-radius: 4px; font-weight: normal; font-style: italic; line-height: 17px; width: auto; text-align: center;">Our Products:</a>
                                                              </span>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0px;" align="center">
                                                              <img style="display: block; border: 0; outline: none; text-decoration: none;" src="https://ci4.googleusercontent.com/proxy/tiUn2e4qAI3ycSsJTrGi9v7zT3dEr1cDK1das7eYftlW46BEh5jPwJb-U6YQttvRTRgIGUI-4c79qT6-Adq9qC7bZMzCwYNWT6WCd7_fSzUWThmHK6ODA3kz4ZiDDWAT3hbK9qjKRn9yk2c0lTErcg3X2tbwsBkvERHb4QdgX32ZvoDz7Q=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/CABINET_d311a5e6ed48b5c8a505f31adfc15071/images/57801613653525905.png" alt="" width="270">
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                                <tbody>
                                                                  <tr style="border-collapse: collapse;">
                                                                    <td style="padding: 0px; width: 270px;" align="left">
                                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                          <tr style="border-collapse: collapse;">
                                                                            <td style="padding: 0px;" align="left">
                                                                              <p style="margin: 0px; font-size: 14px; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; line-height: 21px; color: #333333;">Develop your leadership through a volunteering project abroad with 
                                                                                <strong>a school, a summer camp or an NGO</strong>, while contributing to one of the Sustainable Development Goals in a period of 
                                                                                <strong>6-8 weeks.</strong>
                                                                              </p>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <p style="margin: 0; font-size: 14px; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; line-height: 21px; color: #333333;">Develop your leadership while boosting your career prospects with an international internship in your field, through working with 
                                                                <strong>a company, school or institution</strong> for a period of 
                                                                <strong>6-78 weeks.</strong>
                                                              </p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0px;" align="center">
                                                              <img style="display: block; border: 0; outline: none; text-decoration: none;" src="https://ci3.googleusercontent.com/proxy/_L5zhqUxfCmI4yQ20MudjimfpZ6PXuJppoh8E2_RpsD6axvCOUUaLXEZ5qXtc8tzNyVwAkjXumcm2IvtxBUD9X42g22buDsGTsm7Emg0P_xNC1c0vSutX92Qm9BYDmgvGiOUePWDNdSB9jwr5R4_iRynE4QtUQ7q0j0TISOqRUDa_pyGAQ=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/CABINET_d311a5e6ed48b5c8a505f31adfc15071/images/55051613653563967.png" alt="" width="225">
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0px;" align="center">
                                                              <img style="display: block; border: 0; outline: none; text-decoration: none;" src="https://ci4.googleusercontent.com/proxy/NuORkLtfZuVKQ-CrOqFWh_9xQKXBVDvwaZhZCYyY8LutCNqunr4bW_BAofExsEdfd3j2ikVNA5-S-2-GWUxmg435XmYRyz6JhIYl845aDlnKGyTr3r3iyUP6qqYMFp8K56CWSgjq_XquQb87-OQAJoOid9o-YJ1oZPLWtOdo-bUDT-O33w=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/CABINET_d311a5e6ed48b5c8a505f31adfc15071/images/88991613653583530.png" alt="" width="245">
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table style="border-collapse: collapse; border-spacing: 0px; float: right;" cellspacing="0" cellpadding="0" align="right">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 270px;" align="left">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="left">
                                                              <table style="border-collapse: collapse; border-spacing: 0px; float: left;" cellspacing="0" cellpadding="0" align="left">
                                                                <tbody>
                                                                  <tr style="border-collapse: collapse;">
                                                                    <td style="padding: 0px; width: 270px;" align="left">
                                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                          <tr style="border-collapse: collapse;">
                                                                            <td style="padding: 0px;" align="left">
                                                                              <p style="margin: 0px; font-size: 14px; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; line-height: 21px; color: #333333;">Develop your leadership while boosting your career prospects with an opportunity t teach abroad, through working with 
                                                                                <strong>a school or institution</strong> for a period of 
                                                                                <strong>9-78 weeks.</strong>
                                                                              </p>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table style="border-collapse: collapse; border-spacing: 0px; table-layout: fixed!important; width: 100%;" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr style="border-collapse: collapse;">
                                    <td style="padding: 0; margin: 0;" align="center">
                                      <table style="border-collapse: collapse; border-spacing: 0px; background-color: #ffffff; width: 600px;" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                                        <tbody>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 20px; margin: 0;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 560px;" align="center" valign="top">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; font-size: 0px;" align="center">
                                                              <img style="display: block; border: 0; outline: none; text-decoration: none;" src="https://ci5.googleusercontent.com/proxy/P5s9Dl78fQ_Apr3mdLwLg7jfMSoi7D1YzBbeQaDKmBzGZ1wNBdSL4dZ613ScAcCeOuDOUVBLfAMdULQy0Z2S6e8ZlOdeBrFYOJDzSXXzOEII8Sy5DHMNBaU5fD1SomVv1BfsxEIAgkjgoIfuBVBeNaypsHbsf_fEzedYjQjiTRtzi_Se=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/guids/CABINET_d311a5e6ed48b5c8a505f31adfc15071/images/6261613654123021.png" alt="" width="560">
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-top: 20px; padding-left: 20px; padding-right: 20px; background-color: #52565e;" align="left" bgcolor="#52565e">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 560px;" align="center" valign="top">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="center">
                                                              <h1 style="margin: 0; line-height: 34px; font-family: 'trebuchet ms','lucida grande','lucida sans unicode','lucida sans',tahoma,sans-serif; font-size: 28px; font-style: normal; font-weight: normal; color: #ffffff;">
                                                                <em>Get more information on our website:</em>
                                                              </h1>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0; padding-bottom: 15px; padding-left: 20px; padding-right: 20px; background-color: #52565e;" align="left" bgcolor="#52565e">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 560px;" align="center" valign="top">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0;" align="center">
                                                              <span style="background: #f2f7fb; display: inline-block; border-radius: 5px; width: auto; border: 0px solid #e7e8e9;">
                                                                <a href="https://aiesec.org" style="text-decoration: none; font-family: lato,'helvetica neue',helvetica,arial,sans-serif; font-size: 16px; color: #52565e; border-style: solid; border-color: #f2f7fb; border-width: 10px 20px; display: inline-block; background: #f2f7fb; border-radius: 5px; font-weight: bold; font-style: normal; line-height: 19px; width: auto; text-align: center;" target="_blank" rel="noopener">aiesec.org</a>
                                                              </span>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table style="border-collapse: collapse; border-spacing: 0px; table-layout: fixed!important; width: 100%;" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr style="border-collapse: collapse;">
                                    <td style="padding: 0; margin: 0; background-color: #f1f6fb;" align="center" bgcolor="#f1f6fb">
                                      <table style="border-collapse: collapse; border-spacing: 0px; background-color: transparent; width: 600px;" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 600px;" align="center" valign="top">
                                                      <table style="border-collapse: separate; border-spacing: 0px; border-top: 5px solid #ffffff;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; padding-top: 5px; font-size: 0;" align="center">
                                                              <table style="border-collapse: collapse; border-spacing: 0px;" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                  <tr style="border-collapse: collapse;">
                                                                    <td style="padding: 0; margin: 0; padding-right: 10px;" align="center" valign="top">
                                                                      <a href="https://twitter.com/aiesec?lang=fr" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                        <img style="display: block; border: 0; outline: none; text-decoration: none;" title="Twitter" src="https://ci5.googleusercontent.com/proxy/NhbvjnkuDKLV_QJPUNMHPeOeTqnHjPVRxL3lEfcN-s0FbtFD72IVBu93aklcyzX0YMZSPewb5yT17BfqllOjBZMQseeuHoERICVFXWL0Sj7xBjB9-tefyCxVt9KYn96aMhbFmG725Hcz0UOnShTehUEU7GYsqKg=s0-d-e1-ft#https://stripo.email/cabinet/assets/editor/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="24" height="24">
                                                                      </a>
                                                                    </td>
                                                                    <td style="padding: 0; margin: 0; padding-right: 10px;" align="center" valign="top">
                                                                      <a href="https://www.facebook.com/AIESECglobal/" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                        <img style="display: block; border: 0; outline: none; text-decoration: none;" title="Facebook" src="https://ci4.googleusercontent.com/proxy/Yh7PXPoPmVD09L0zgMEQOcVoQXLpEBe9-CIYS_EY6R7kZNwEZyZg8VcF0LNUxAKs0G_YReywXbVoq73OC9k_ocGazl1mrMSmi9xmZGJkT9zI-4jQdrmAP0WQA9QhV3pAxSx7UqYfk_zVnHnqhAtb5WDt_iWP1Und=s0-d-e1-ft#https://stripo.email/cabinet/assets/editor/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="24" height="24">
                                                                      </a>
                                                                    </td>
                                                                    <td style="padding: 0; margin: 0;" align="center" valign="top">
                                                                      <a href="https://instagram.com/aiesecglobal" style="font-family: arial,'helvetica neue',helvetica,sans-serif; font-size: 14px; text-decoration: underline; color: #333333;" target="_blank" rel="noopener">
                                                                        <img style="display: block; border: 0; outline: none; text-decoration: none;" title="Instagram" src="https://ci4.googleusercontent.com/proxy/6ojYWN4mrKopnygbinI7LOyFgmkgI8JBLNVf6U5gwLVhlQEibHfWyNOSdVCNBtwwY9YWmiZNkrO5q4SFmBMmheGVnXYpirP-O7NSKcQ4Yh4nUC2EnkS_as4jeb7qZeTY-h0uaT6h9mdxh_3lDZxTBVNgn5Y_=s0-d-e1-ft#https://ozgdyg.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Ig" width="24" height="24">
                                                                      </a>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse;">
                                            <td style="padding: 0; margin: 0;" align="left">
                                              <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr style="border-collapse: collapse;">
                                                    <td style="padding: 0; margin: 0; width: 600px;" align="center" valign="top">
                                                      <table style="border-collapse: collapse; border-spacing: 0px;" width="100%" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                          <tr style="border-collapse: collapse;">
                                                            <td style="padding: 0; margin: 0; padding-top: 10px;" align="center">
                                                              <p style="margin: 0; font-size: 14px; font-family: arial,'helvetica neue',helvetica,sans-serif; line-height: 21px; color: #666666;">&nbsp;</p>
                                                              <p style="margin: 0; font-size: 14px; font-family: arial,'helvetica neue',helvetica,sans-serif; line-height: 21px; color: #666666;">© 2021 AIESEC. All Rights Reserved.</p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
