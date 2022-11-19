import '@assets/styles/loginPage.css';

function LoginPage(): JSX.Element {
  return (
    <div className="h-full">
      <div className=" flex flex-col items-center  justify-between box_login">
        <div className="logo-box_login flex-initial items-center justify-center">
          <div>
            {/* <img src="" /> */}
            <p className="text-12 leading-16  text-center">人的聚集地</p>
          </div>
        </div>
        <div>
          <div>接受该协议</div>
          <p>注册</p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
