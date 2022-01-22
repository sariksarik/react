import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
  return <div className={s.content}>
    <div>
      <img alt='' src='https://i.pinimg.com/originals/45/ac/71/45ac713bf947982b8e14f2184a0a2ad9.jpg'></img>
    </div>
    <div>
      ava+description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
    </div >
    <div className={s.posts}>
      <div className={s.content}>
        post 1
      </div>
      <div className={s.content}>
        post 2
      </div>
      {/* <div>
      <img src='https://www.pngkit.com/png/full/201-2019040_killua-transparent-cool-clipart-library-killua-lineart.png'></img>
    </div> */}

    </div>
  </div>

}
export default Profile