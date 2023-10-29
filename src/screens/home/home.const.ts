import { Image } from 'expo-image';

export const CAT_URL_ARRAY = [
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399324/cat/IMG_7218_abtejp.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399325/cat/IMG_4362_nbpndm.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399324/cat/IMG_8798_xcwnpe.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399324/cat/IMG_4063_vbg66i.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399325/cat/IMG_4363_oezpax.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399323/cat/IMG_7161_uolhrb.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399322/cat/IMG_3701_imksds.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399322/cat/IMG_5896_l6mlww.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399322/cat/IMG_4223_i7vh1y.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399321/cat/IMG_4347_uxlqz4.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399323/cat/3472434180474783524_20211008010657008_wzqzoj.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399321/cat/IMG_8246_w1rtun.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399322/cat/IMG_7243_ks7nkg.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399320/cat/IMG_5898_vebqd5.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399321/cat/3472434196492242468_20211008003736165_kzxwbc.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399321/cat/3472434196366010661_20211008003917120_pd3uyp.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399321/cat/3472434179770053924_20211008011116758_uouzyx.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399319/cat/IMG_2829_a8ubqx.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399320/cat/3472434179724256292_20211008011201370_ehw6rk.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399319/cat/3472434195747035173_20211008005815224_sxvchf.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399319/cat/IMG_9815_m9g7qi.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399319/cat/IMG_7612_2_l7ohha.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399319/cat/3472434180067102501_20211008010936894_khdzj6.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399318/cat/IMG_2332_wmmvu5.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399317/cat/IMG_4701_dlexbs.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399319/cat/3472434196800363557_20211008003626887_chh5g3.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399318/cat/3472434179784233252_20211008011059500_y5cbew.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399318/cat/3472434196494951205_20211008003729017_fkp8vm.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399317/cat/IMG_9720_wilo9d.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399317/cat/IMG_2772_zb9rj7.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399316/cat/IMG_7543_qqnhnw.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399316/cat/3472434196192418852_20211008004337044_is0dbh.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399315/cat/IMG_2786_edge75.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399317/cat/3472434195750962725_20210123233654393_ubsesu.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399316/cat/3472434196459439140_20211008003752301_v3mxla.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399315/cat/IMG_6471_zugpkv.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399315/cat/IMG_3157_w6ykcb.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399314/cat/IMG_3643_boa4sv.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399314/cat/IMG_2336_ayjuij.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399314/cat/IMG_1293_xhppvs.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399314/cat/3472434196373416484_20211008003838374_edgnri.jpg',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399314/cat/IMG_1292_dhyk2z.heic',
  'https://res.cloudinary.com/dy5pujkzs/image/upload/v1698399314/cat/3472434196191760676_20211008004340980_kkh8fm.jpg',
];

export const catData = CAT_URL_ARRAY.map((e, i) => {
  Image.prefetch(e);
  return {
    id: String(i),
    imageUrl: e,
  };
});
