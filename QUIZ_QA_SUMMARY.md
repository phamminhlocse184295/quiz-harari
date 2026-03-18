# Quiz Harari - Tong hop cau hoi, cau tra loi va diem

## Cach tinh ket qua
- Moi dap an cong vao 1 vector 5 truc diem: `[axis1, axis2, axis3, axis4, axis5]`.
- Sau 7 cau, he thong cong tong tat ca vector thanh `userScores`.
- Ket qua cuoi cung KHONG co dinh theo tung dap an rieng le.
- Ket qua duoc chon bang dot-product giua `userScores` va `lesson.axes` (xem `quiz.js`).

Cong thuc:

`score_lesson = sum(lesson.axes[i] * userScores[i])`

Lesson co `score_lesson` cao nhat se la ket qua.

## Cau 1
**Khi ban thay mot bai bao giat title 'SOC: AI se thay the 90% cong viec vao 2030', ban se lam gi?**
- A) Share ngay - ban be can biet dieu nay! -> `[0, 0, 0, 0, 1]`
- B) Doc them 2-3 nguon khac truoc khi tin -> `[3, 0, 0, 2, 1]`
- C) Luot qua, khong quan tam may -> `[0, 0, 0, 0, 0]`
- D) Doc ky phan binh luan xem nguoi ta nghi gi -> `[1, 0, 2, 1, 0]`

## Cau 2
**Neu AI co the lam tot hon ban 80% cong viec hien tai, ban nghi ban se lam gi?**
- A) Hoc ky nang moi de hop tac cung AI -> `[1, 3, 0, 0, 1]`
- B) Tim cong viec ma AI chua lam duoc (sang tao, cam xuc...) -> `[2, 2, 0, 1, 0]`
- C) Lo lang lam, chua biet phai lam gi -> `[0, 0, 0, 0, 2]`
- D) Tan huong thoi - de AI lam het cho ranh -> `[0, 1, 0, 0, 0]`

## Cau 3
**Dieu ban tu hao nhat ve ban than minh la gi?**
- A) Toi thuoc ve mot dat nuoc / cong dong cu the -> `[0, 0, 3, 0, 0]`
- B) Toi la nguoi cua rieng minh, khong bi dinh nghia -> `[2, 1, 0, 1, 0]`
- C) Toi la mot phan cua nhan loai noi chung -> `[1, 0, 1, 0, 3]`
- D) Toi van dang kham pha ban than minh -> `[0, 0, 0, 2, 1]`

## Cau 4
**Ban nghi dieu gi la 'that' nhat trong the gioi hom nay?**
- A) Nhung gi khoa hoc da chung minh -> `[3, 0, 0, 2, 1]`
- B) Nhung gi toi truc tiep trai nghiem -> `[1, 2, 0, 1, 0]`
- C) Nhung cau chuyen va gia tri chung ta cung tin tuong -> `[1, 0, 3, 0, 1]`
- D) Toi khong chac dieu gi la that nua... -> `[2, 0, 0, 3, 0]`

## Cau 5
**Khi nghi ve nam 2050, cam xuc dau tien cua ban la gi?**
- A) Hao hung - se co nhieu cong nghe tuyet voi! -> `[0, 3, 0, 0, 1]`
- B) Lo ngai - bien doi khi hau, bat binh dang... -> `[2, 0, 0, 0, 3]`
- C) Binh than - khong biet nen khong lo -> `[0, 1, 0, 0, 0]`
- D) To tu hao - muon hieu de chuan bi tot hon -> `[2, 2, 0, 2, 1]`

## Cau 6
**Dieu nao sau day mo ta dung nhat ve ban?**
- A) Toi rat tu hao ve ban sac dan toc va van hoa cua minh -> `[0, 0, 4, 0, 0]`
- B) Toi tim kiem y nghia qua tin nguong hoac tam linh -> `[0, 0, 1, 3, 0]`
- C) Toi dat cau hoi ve moi thu - ke ca niem tin cua chinh minh -> `[3, 0, 0, 2, 0]`
- D) Toi quan tam den cong bang xa hoi hon la ban sac ca nhan -> `[1, 0, 0, 1, 3]`

## Cau 7
**Cach ban thuong danh thoi gian ranh la gi?**
- A) Xem phim / doc sach khoa hoc vien tuong, tim hieu cong nghe -> `[1, 3, 0, 1, 0]`
- B) Ngoi yen, thien dinh hoac viet nhat ky suy ngam ve cuoc song -> `[0, 1, 0, 3, 0]`
- C) Di choi voi ban be, gia dinh - nap nang luong qua ket noi -> `[0, 0, 3, 0, 1]`
- D) Doc tin tuc, tim hieu cac van de xa hoi va the gioi -> `[2, 0, 1, 0, 2]`

---
Nguon: `data/questions.js`, `quiz.js`
