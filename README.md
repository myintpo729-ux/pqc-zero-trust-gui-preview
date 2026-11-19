# PQC Zero-Trust Overlay — GitHub Pages GUI Preview

ဤ Repository သည် မူရင်း Go Project ၏ **GUI Design ကိုသာ** GitHub Pages မှာ ပြသရန် ပြင်ဆင်ထားသော static preview ဖြစ်သည်။

## ပါဝင်သောဖိုင်များ

- `index.html` — Dashboard GUI
- `assets/style.css` — Dark navy / blue / cyan design နှင့် responsive layout
- `assets/app.js` — File picker နှင့် preview-only interaction
- `.nojekyll` — GitHub Pages static file serving အတွက်

## GitHub မှာ တင်ပြီး Preview ကြည့်ရန်

1. GitHub တွင် repository အသစ်တစ်ခုဖန်တီးပါ။ ဥပမာ `pqc-zero-trust-gui-preview`
2. ဒီ ZIP ကို extract လုပ်ပါ။
3. Extract လုပ်ထားသော folder ထဲက `index.html`, `assets/`, `README.md`, `.nojekyll` တို့ကို repository ၏ **root** ထဲသို့ upload လုပ်ပါ။
4. GitHub repository → **Settings** → **Pages** ကိုဖွင့်ပါ။
5. **Build and deployment** အောက်တွင် **Deploy from a branch** ကိုရွေးပါ။
6. Branch ကို `main`၊ folder ကို `/(root)` ရွေးပြီး **Save** နှိပ်ပါ။
7. Pages ထုတ်ပေးသော URL ကိုဖွင့်ပါ။ ပထမဆုံး deploy ပြီးစီးရန် အချိန်အနည်းငယ်စောင့်ရနိုင်သည်။

## သတိပြုရန်

ဤသည် GUI preview သာဖြစ်သည်။ GitHub Pages သည် static hosting ဖြစ်သောကြောင့် ဤ preview က Go server, MinIO, mTLS, JWT, ABAC, PQC encryption/decryption တို့ကို မ run ပါ။

- Upload button သည် file name ကို browser ထဲတွင်သာ ပြသပြီး server သို့ မပို့ပါ။
- Storage files နှင့် audit logs များသည် sample data များသာဖြစ်သည်။
- MinIO ကို မချိတ်ဆက်ထားပါ။
- မူရင်း Go `main.go` နှင့် backend logic ကို မပြောင်းထားပါ။ ဤ folder သည် GUI preview အတွက် သီးခြားဖြစ်သည်။

## Local preview

`index.html` ကို browser ဖြင့်ဖွင့်နိုင်သည်။ GitHub Pages deployment မတိုင်မီ local preview စစ်ဆေးရန်လည်း အသ उपयोगી ဖြစ်သည်.
