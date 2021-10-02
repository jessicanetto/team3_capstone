\c connect;
INSERT INTO users (
        linkedin,
        twitter,
        email,
        display_name,
        photo_url,
        phone_number,
        uid
    )
VALUES (
        'https://www.linkedin.com/in/carlos-hidalgo',
        'https://twitter.com/carlos',
        'carloshidalgo@pursuit.org',
        'CarlosH',
        'https://picsum.photos/100',
        7185551234,
        'szyR5ui895Toro3cnm75MJKOYkf1'
    ),
    (
        'https://www.linkedin.com/in/coreenmcooper',
        'https://twitter.com/cc0upa',
        'coreencooper@pursuit.org',
        'CCooper',
        'https://picsum.photos/100',
        2125551234,
        'XsyyfBlnlJeve32xqPQUaVv9f5J2'
    ),
    (
        'https://www.linkedin.com/in/jessicanetto',
        'https://twitter.com/jessica',
        'jessicanetto@pursuit.org',
        'JNetto',
        'https://picsum.photos/100',
        3475551234,
        'OUO4QH8PETgcO5TAECPxz4K16VF3'
    ),
    (
        'https://www.linkedin.com/in/poonam-dass',
        'https://twitter.com/poonam',
        'poonamdass@pursuit.org',
        'PDass',
        'https://picsum.photos/100',
        9175551234,
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2'
    );
INSERT INTO connections (user1_id, user2_id)
VALUES (
        'OUO4QH8PETgcO5TAECPxz4K16VF3',
        'szyR5ui895Toro3cnm75MJKOYkf1'
    ),
(
        'XsyyfBlnlJeve32xqPQUaVv9f5J2',
        'szyR5ui895Toro3cnm75MJKOYkf1'
    ),
(
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2',
        'XsyyfBlnlJeve32xqPQUaVv9f5J2'
    ),
(
        'XsyyfBlnlJeve32xqPQUaVv9f5J2',
        'OUO4QH8PETgcO5TAECPxz4K16VF3'
    ),
(
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2',
        'szyR5ui895Toro3cnm75MJKOYkf1'
    ),
(
        'JzsbUy5H7tMu2Hs0Y7mFzVk41oC2',
        'OUO4QH8PETgcO5TAECPxz4K16VF3'
    );

 

         
