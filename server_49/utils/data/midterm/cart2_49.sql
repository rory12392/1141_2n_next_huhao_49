CREATE TABLE cart2_49 (
    cid INT NOT NULL PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT,
    total INT DEFAULT 0,
    added_at timestamp DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk1 FOREIGN KEY (user_id)
        REFERENCES user2_49(uid)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    CONSTRAINT fk2 FOREIGN KEY (product_id)
        REFERENCES shop2_49(pid)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO cart2_49 (cid, user_id, product_id, quantity, total, added_at)
VALUES
(1, 213417149, 1, 0, 0, '2025-12-24 18:50:50'),
(2, 213417149, 10, 3, 0, '2025-12-24 18:50:50'),
(3, 213417149, 15, 1, 0, '2025-12-24 18:50:50'),
(4, 213417149, 23, 2, 0, '2025-12-24 18:50:50'),
(5, 213417149, 30, 2, 0, '2025-12-24 18:50:50'),
(6, 1, 1, 2, 0, '2025-12-24 18:50:50'),
(7, 2, 10, 3, 0, '2025-12-24 18:50:50'),
(8, 3, 15, 1, 0, '2025-12-24 18:50:50'),
(9, 4, 23, 2, 0, '2025-12-24 18:50:50'),
(10, 4, 30, 2, 0, '2025-12-24 18:50:50');

SELECT
    c.user_id,
    u.uname,
    c.product_id,
    s.pname,
    c.quantity,
    s.price,
    s.img_url
FROM cart2_49 AS c,
    user2_49 AS u,
    shop2_49 AS s
WHERE u.uid = '213417149'
  AND c.user_id = u.uid
  AND c.product_id = s.pid;
