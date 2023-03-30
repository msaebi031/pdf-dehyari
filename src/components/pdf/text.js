export const TITLE_BOLD = "وزارت کشور";
export const TITLE_TWO = "فرمانداری شهرستان تیران و کرون";
export const TITLE_THERY = "بخشداری کرون";
export const TITLE_FOOR = (dehyari) => `دهیاری ${dehyari}`;
// ============== {date} ============= //
export const DATE = (date) => `تاریخ : ${date}`;
export const NUMBER = (number) => `شماره : ${number}`;
export const JOINED = (joined) => `پیویست : ${joined}`;
// ============== Fealid One ============= //
export const ORDER = ": خواهشمند است دستور فرمایید";
export const FILED_ONE = (price, priceWords, fors, payTo) =>
  `مبلغ ${price} ریال به حروف ${priceWords} ریال بابت ${fors} دروجه ${payTo} پرداخت گردد`;
export const SIGNATURE = "نام و امضاء درخواست کننده";
// ============== Fealid Two ============= //
export const ORDER_TWO = "مسئول امور مالی دهیاری های بخش کرون";
export const FILED_TWO = (numberSheets, price, typeAccount, account, fors) =>
  `به استناد آیین نامه مایی دهیاری ها با توجه به تعداد ${numberSheets} برگ ضمائم پیوست  پرداخت مبلغ \nم : ${price} ریال از محل اعتبارات ${typeAccount} از حساب به شماره ${account} پست بانک شعبه تیران در وجه ${fors} در صورت وجود اعتبار پس از کسر کسوارات بلا مانع است`;
export const SIGNATURE_TWO = "نام و امضاء دهیار";
// ============== Fealid Thery ============= //
export const FILED_THERY = (ckeckNumber, date, price, priceWords, fors) =>
  `چک شماره ${ckeckNumber} به تاریخ ${date} و مبلغ ${price} ریال به حروف ${priceWords} ریال عهده پست بانک شعبه تیران در وجه ${fors} صادر گردید`;
export const SIGNATURE_THERY = "مسئول امور مالی";
// ============== Fealid Foor ============= /
export const FILED_FOOR = (ckeckNumber, date, price, priceWords, fors) =>
  `چک شماره ${ckeckNumber} به تاریخ ${date} و مبلغ ${price} ریال به حروف ${priceWords} ریال تحویل اینجانب ${fors} صادر گردید`;
export const SIGNATURE_FOOR = "تحویل گیرنده";

// left
export const FARMANDARI = "فرمانداری تیران و کرون";
export const BOOK_BUY = "« برگ درخواست خرید کالا یا خدمت »";
export const ORDER_LEFT = ". خواهشمند است نسبت به خرید / انجام اقلام زیر اقدام فرمایید";
export const SIGNATURE_LEFT = ": امضاء درخواست کننده -";
export const NAME_LEFT = (name) => `نام و نام خانوادگی : ${name}`;
export const BUY_LEFT = (buy) => `. خرید اقلام بالا از بودجه سال ${buy} بلا مانع است -`;
export const RESPONSIBLE = "مسئول امور مالی";
export const NAME_RESPONSIBLE = `.......... نام و نام خانوادگی`;
export const REGULATION = ". برابر مقررات مالی خریداری شود -";
export const NAME_VILLAGER = (name) => `نام و نام خانوادگی دهیار : ${name}`;
