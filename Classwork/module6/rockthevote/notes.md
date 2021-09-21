*** STOP messing with CSS, pleb. implement functionality first ***

REVIEW:
- CSS/layout    

GOALS:
    - comment component
        - how to delete comments? = .put and .delete?
    - button component for postlist to toggle post views (and user/all view possibly)
    - implement backend security features

IMPLEMENT:
- comment component
    + comment reply view: @s or sub threads?
- deleteComment function
- nightmode/alt views
- button toolbar for post view sorting
    + a new component that houses all buttons in postlist view
    + toggle sort view hook
    + .sort() can be appended onto posts.map()
- timestamps, maybe on frontend or another way not in schema but X

FUTURE DEV:
- user mentions in thread headers link to user profiles
- replies are sub threads in threads like reddit
- checkbox delete functionality in userPosts view
    + maybe send ids into array and delete that array on function call