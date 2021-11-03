import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

//tool for cleaning up svg https://jakearchibald.github.io/svgomg/
const LevelFourIcon = ({ brand, ...rest }) => (
  <SvgIcon {...rest}>
    {brand === "bmr" ? (
      <path d="M 1,7.648438 12,14 v 2.310547 L 1,9.958984 Z m 22,0 L 12,14 v 2.310547 L 23,9.958984 Z" />
    ) : (
      <path d="M19.386 18.264a.114.114 0 01-.102.018.154.154 0 01.102-.018zm-.921.116c-.067.047-.142.022-.214.027a.535.535 0 01.214-.027zm.245-.03c-.066.046-.142.022-.213.027a.55.55 0 01.213-.028zm.246-.03c-.066.046-.142.021-.215.027a.56.56 0 01.215-.028zM16.61 7.706a.193.193 0 01.019-.124c.108-.324.218-.648.329-.971l.03-.087a.066.066 0 01.067-.052h5.591c.189 0 .172-.016.172.173a227.86 227.86 0 01-.002 1.011.046.046 0 01-.047.048 2.203 2.203 0 01-.107.002h-5.913zm-9.164 7.82a.078.078 0 01-.01.081c-.186.359-.372.717-.556 1.076a.112.112 0 01-.118.075c-.03-.003-.061 0-.092 0H1.352c-.157 0-.15.007-.15-.15V12.96 6.506c0-.23-.025-.202.205-.203H2.648a.054.054 0 01.06.055l.001.062v8.891c0 .246-.03.212.21.212h4.367c.054 0 .11.003.159.004zm12.055 1.4l-3.247-.001c-.2 0-.182.018-.182-.18V11.17v-.061c.001-.117.001-.117.12-.118h6.034c.22 0 .196-.028.197.194v.904c0 .031 0 .062-.002.092a.048.048 0 01-.047.05 3.45 3.45 0 01-.153.003h-4.427c-.249 0-.215-.028-.216.224v3.049c0 .19-.02.175.17.175a30859.893 30859.893 0 005.13.001.053.053 0 01.057.059l.001.06v1.012c0 .02 0 .041-.002.061a.049.049 0 01-.048.05 2.712 2.712 0 01-.138.002H19.5zm-1.035 1.453l.032-.003c.071-.005.147.02.213-.028l.031-.002c.073-.006.149.02.215-.028.108-.02.218-.033.328-.037.035.011.073.004.102-.018l1.125-.132c.008-.001.017.008.036.018l-.78 3.841a3.945 3.945 0 01-.233-.45c-.073-.146-.142-.294-.213-.441-.07-.147-.143-.293-.212-.435a.267.267 0 00-.137.048c-1.872.9-3.809 1.66-5.794 2.273-.63.193-1.266.36-1.912.49a8.866 8.866 0 01-1.548.19 3.316 3.316 0 01-1.13-.168 4.037 4.037 0 01-1.655-1.016 2.647 2.647 0 01-.8-2.08c.02-.435.101-.864.242-1.275.17-.503.384-.99.64-1.456.369-.69.773-1.358 1.176-2.027a83.784 83.784 0 012.6-4.01c.755-1.106 1.517-2.206 2.275-3.309.325-.471.67-.927 1.006-1.39.37-.496.712-1.01 1.025-1.543.115-.2.222-.403.32-.61.047-.097.096-.193.146-.287.148-.28.248-.584.296-.898l.045-.318a2.084 2.084 0 00-.03-.747c-.023-.11-.059-.216-.087-.325a.197.197 0 00-.099-.128 3.396 3.396 0 00-.57-.258 5.723 5.723 0 00-1.205-.282 10.94 10.94 0 00-1.82-.079c-.443.017-.886.054-1.327.105-.634.071-1.264.177-1.887.316-1.082.238-2.131.61-3.122 1.108-.35.17-.678.38-.98.624a2.968 2.968 0 00-.447.461 1.39 1.39 0 00-.186.316.707.707 0 00-.038.435c.023.1.055.196.095.29.026.061.046.125.06.19.016.086-.04.136-.128.12a.498.498 0 01-.184-.073 1.018 1.018 0 01-.189-.155 2.439 2.439 0 01-.592-1.024 1.457 1.457 0 01.192-1.231c.142-.213.317-.403.517-.562.273-.214.566-.403.875-.562A11.27 11.27 0 016.95.932 17.74 17.74 0 019.204.435c.44-.07.88-.128 1.321-.17C11.176.2 11.831.19 12.484.233a7.77 7.77 0 011.536.263c.592.168 1.141.458 1.614.852a4.31 4.31 0 011.161 1.446c.225.444.338.936.332 1.434a3.678 3.678 0 01-.184 1.021 6.422 6.422 0 01-.606 1.32c-.255.437-.543.852-.829 1.27l-3.784 5.524c-.55.805-1.104 1.608-1.635 2.427a32.374 32.374 0 00-1.784 3.054c-.234.465-.458.935-.647 1.421a5.25 5.25 0 00-.272.94c-.04.221-.055.446-.044.671A.12.12 0 007.43 22c.196.072.397.13.601.176a7.08 7.08 0 001.979.154c.326-.023.65-.069.97-.139a22.396 22.396 0 005.453-1.882c.504-.248.993-.526 1.464-.832l.127-.086a.037.037 0 00.006-.063 3.073 3.073 0 00-.128-.11l-.695-.578a.99.99 0 01-.069-.061.03.03 0 01-.003-.027c.003-.008.014-.012.022-.016a1478.139 1478.139 0 011.003-.124c.03-.004.06-.003.091-.005.072-.005.147.02.214-.027z" />
    )}
  </SvgIcon>
);

export default LevelFourIcon;
