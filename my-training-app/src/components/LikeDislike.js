import React, { useState } from "react";


function LikeDislike() {
  const [like, setLike] = useState(100);
  const [dislike, setDisline] = useState(4);

  const [likeactive, setLikeactive] = useState(100);
  const [dislikeactive, setDislineactive] = useState(4);

  function Like(){
    if(likeactive){
      setLikeactive(false)
      setLike(like-1)
    }else{
      setLikeactive(true)
      setLike(like+1)

      if(dislikeactive){
        setDislineactive(false)
        setLike(like+1)
        setDisline(dislike-1)
      };
    }


  }


  function Dislike(){
    if(dislikeactive){
      setDislineactive(false)
      setDisline(dislike-1)
    }else{
      setDislineactive(true)
      setDisline(like+1)
      if(likeactive){
        setLikeactive(false)
        setDisline(like+1)
        setLike(dislike-1)
      }
    }

  }
  return(
    <div className="favo">
      <button onClick={Like}>Fav{like}</button>
      <button onClick={Dislike}>Fav{dislike}</button>

    </div>

  )
}

export default LikeDislike;
