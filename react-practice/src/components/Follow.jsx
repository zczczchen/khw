import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../components/CurrentUserContext";
import "../css/follow.css";

function Follow(props) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  const [isFollowed, setIsFollowed] = useState(false);

  const [followedTitle, setFollowedTitle] = useState([[]]);

  useEffect(() => {
    async function getFollowed() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/users/${isLoggedIn.konoKid}/followed_titles`,
        { headers: { "X-Kono-Token": isLoggedIn.konoToken } }
      );
      const result = await response.json();

      console.log(result);

      setFollowedTitle(result.followed_titles);

      console.log(result.followed_titles);

      for (let i = 0; i < result.followed_titles.length; i++) {
        if (result.followed_titles[i] === props.title) {
          setIsFollowed(true);
        }
      }
    }
    getFollowed();
  }, []);

  return (
    <>
      <div>
        {!isLoggedIn.konoToken ? (
          <div className='follow' onClick={() => alert("Login and follow")}>
            <img
              className='follow-img'
              src={`${import.meta.env.BASE_URL}images/follow-icon.svg`}
              alt='unfollowed'
            />
          </div>
        ) : (
          // 已登入顯示關注狀態

          // 2.如何讓點擊到的愛心對應title
          // 用props傳給Follow

          // 3.如何取得目前kid關注狀態：取得follow title、讓follow title issue愛心變成已關注
          // `https://api-sandbox.thekono.com/KPI2/users/${isLoggedIn.konoKid}/followed_titles`
          // Method: GET

          // const [followedTitle, setFollowedTitle] = useState([response[followed_titles]])

          // 4.如何加入新關注的title到陣列
          // `https://api-sandbox.thekono.com/KPI2/users/${isLoggedIn.konoKid}/followed_titles`
          // Method: POST

          // setFollowedTitle(push(clickedTitle))
          // 先GET所有已關注，再往下傳

          // 5.如何從陣列移除取消關注的title
          // `https://api-sandbox.thekono.com/KPI2/users/${isLoggedIn.konoKid}/followed_titles/:title_id`
          // Method: DELETE

          // setFollowedTitle(filter(clickedTitle))

          <div
            className='follow'
            onClick={() => setIsFollowed((prev) => !prev)}
          >
            {isFollowed ? (
              <img
                className='follow-img'
                src={`${
                  import.meta.env.BASE_URL
                }images/follow-icon-followed.svg`}
                alt='followed'
              />
            ) : (
              <img
                className='follow-img'
                src={`${import.meta.env.BASE_URL}images/follow-icon.svg`}
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
