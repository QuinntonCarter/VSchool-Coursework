*** STOP messing with CSS, pleb. implement functionality first ***

REVIEW:
- CSS/layout    

GOALS:
- button component for postlist to toggle post views (and user/all view possibly)
- implement backend security features

IMPLEMENT:
- possible to implement none infinite loop of post retrieval with async?
- post view sorting toolbar = include by votes
- comment component
    + style component
- finish profileComponent
    + add user posts to this page
- finish postDetails component
- viewSortComponent for post view sorting
    + a new component that houses all buttons in postlist view
    + toggle sort view hook
    + .sort() can be appended onto posts.map()
X deleteComment function
X restrict comment deletion only if user._id === comment._authId can it be deleted
X add obj keys where missing
X timestamps, maybe on frontend or another way not in schema but

FUTURE DEV:
- usernames in thread headers link to user profiles
- replies are sub threads in threads like reddit
- checkbox delete functionality in userPosts view
    + maybe send ids into array and delete that array on function call
- nightmode/alt views

useEffect(()=> {
    async function checkPosts(){
        if(userState.allPosts.length)
    }
}, [userState.allPosts])