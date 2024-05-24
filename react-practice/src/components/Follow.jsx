import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../components/CurrentUserContext";
import "../css/follow.css";

function Follow() {
  const { isLoggedIn } = useContext(CurrentUserContext);

  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <>
      <div>
        {!isLoggedIn ? (
          <div className='follow' onClick={() => alert("Login and follow")}>
            <img
              className='follow-img'
              src='/follow-icon.svg'
              alt='unfollowed'
            />
          </div>
        ) : (
          // 已登入顯示關注狀態

          // 1.如何取得login response.kid

          // 2.如何讓點擊到的愛心對應title

          // 3.如何取得目前kid關注狀態：取得follow title、讓follow title issue愛心變成已關注
          // `https://api-sandbox.thekono.com/KPI2/users/${response.kid}/followed_titles`
          // Method: GET

          // const [followedTitle, setFollowedTitle] = useState([response[followed_titles]])

          // 4.如何加入新關注的title到陣列
          // `https://api-sandbox.thekono.com/KPI2/users/${response.kid}/followed_titles`
          // Method: POST

          // setFollowedTitle(push(clickedTitle))

          // 5.如何從陣列移除取消關注的title
          // `https://api-sandbox.thekono.com/KPI2/users/${response.kid}/followed_titles/:title_id`
          // Method: DELETE

          // setFollowedTitle(push(clickedTitle))

          <div
            className='follow'
            onClick={() => setIsFollowed((prev) => !prev)}
          >
            {isFollowed ? (
              <img
                className='follow-img'
                src='/follow-icon-followed.svg'
                alt='followed'
              />
            ) : (
              <img
                className='follow-img'
                src='/follow-icon.svg'
                alt='unfollowed'
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Follow;
