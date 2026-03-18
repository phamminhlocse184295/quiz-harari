# Firebase Setup Cho Ban Cung Nhom

Tai lieu nay dung khi ban cua ban muon chay project nay bang Firebase project rieng.

## 1. Tao Firebase Project Moi
1. Vao Firebase Console: https://console.firebase.google.com
2. Bam `Add project` va tao project moi (vi du: `quiz-harari-teamB`).
3. Bat Firestore Database (Production hoac Test mode tuy nhu cau).
4. (Khuyen nghi) Bat Google Analytics cho project.

## 2. Tao Web App Va Lay Config
1. Trong Firebase project moi, vao Project settings > General.
2. Them Web app (`</>`).
3. Copy doan `firebaseConfig`.
4. Mo file `firebase-init.js` va thay object `firebaseConfig` bang config moi.

## 3. Cau Hinh Firebase CLI Tren May Ban Ay
Can cai Node.js truoc.

```powershell
npm install -g firebase-tools
firebase login
```

Tai thu muc project:

```powershell
firebase use --add
```

- Chon Firebase project cua ban ay.
- Dat alias `default` cho project do.

Khi chay xong, file `.firebaserc` se tro den project cua ban ay.

## 4. Firestore Rules Toi Thieu
Trong Firestore Rules, dung bo rules toi thieu cho app nay:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /results/{doc} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['name', 'resultId', 'resultTitle', 'timestamp']);
    }
  }
}
```

## 5. Deploy
Tai thu muc project:

```powershell
firebase deploy
```

## 6. Kiem Tra Nhanh Sau Deploy
1. Mo trang quiz, lam 1 bai.
2. Mo `stats.html` va xem so lieu co len.
3. Vao Firestore > collection `results` de kiem tra document moi.

## 7. Luu Y Quan Trong
- Moi nguoi co the dung project Firebase rieng, khong can dung chung project cua ban.
- Truoc khi deploy, luon kiem tra `.firebaserc` dang tro den dung project.
- Neu can reset du lieu demo:

```powershell
firebase firestore:delete /results --recursive --force
```
