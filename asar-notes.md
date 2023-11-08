Ok so
PK is username
which comes from firstname_lastname<_NUMBER>
where number is only if theres duplicate names?
sk is type of data like...
-  login_info which would store auth id
-  user_info which would have name info and regular shit which everyone can see

plus a seconday global index of first + last name to query over?
no. 

since queries will be mainly on username: first_last, that is primary key and secondary key can still be type of data
global secondary index could be auth_id -> username 

... idk man