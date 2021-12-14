TOS: can't store personal data or spotify user ids,
    + need to implement notice of accessing playlist metadata, notice of accessing account information only up to listening stats, created playlists and associated info/descriptions, linked email, and profile image but not account information for login or any payment info. notify they can delete their mood. accounts at any time.
    + must have links to playlists via spotify
    + playlist images must be square and not altered at all

todo next
    first:
        + playlists
            -   POST
            -   GET
            -   DELETE
        + users
            -   POST add friend
            +   add friends db ids to array in model
            -   DELETE remove friend
            -   DELETE user's profile
            -   GET friends posts
        + routing:
            -   redirect if no user token, take out of local storage
    everything else:
    
    styles:

Notes to self:


** REVIEW ** :
    - logout and auto logout if tokens are missing