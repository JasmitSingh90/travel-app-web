'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a748e1c4c4f6fdbdbff6afb92f03a57b",
"version.json": "fe8eafefa9254f47aa651451ecf14651",
"index.html": "e9862a82ff2a75652c571a3926fa66f3",
"/": "e9862a82ff2a75652c571a3926fa66f3",
"main.dart.js": "6848d88da544cb75df7fd9ee94bd2131",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "946cded120674fc2dc184174af84a7e9",
"icons/Icon-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-512.png": "21e37165e5b2043de31c65280dd13008",
"icons/Icon-512.png": "21e37165e5b2043de31c65280dd13008",
"manifest.json": "ce3b1535d452b67e9bfc969a5da37252",
"assets/AssetManifest.json": "7e74af6fbe72b0218f0e00ae4c60b6c0",
"assets/NOTICES": "23e3cf78d44895718ca5cb7f285c998a",
"assets/FontManifest.json": "55c07c85e9c6106d75ee8843c6ddb848",
"assets/AssetManifest.bin.json": "2150ae12c7782381fb7797ed7d6e2609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "59569626d3a38e2086f96de07bb2befd",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/vad/assets/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/packages/vad/assets/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/packages/vad/assets/vad_web.js": "f8f0e1a60f2672a7479acf6f954d768f",
"assets/packages/vad/assets/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/packages/vad/assets/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/packages/vad/assets/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/packages/vad/assets/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/packages/vad/assets/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3053af183c3a34f1d9027602be52ed25",
"assets/fonts/MaterialIcons-Regular.otf": "9f6466213bdff834d30edd23e67bd2d3",
"assets/assets/images/chat_camera_image.svg": "13537106679ddfb3f23d43589ab93b53",
"assets/assets/images/room_bg.png": "3ac523b7d4121144f6988754fc60d496",
"assets/assets/images/Card_image_2.png": "b7bce24cb41eaa4512058af69dab510d",
"assets/assets/images/earth.svg": "d8dccec31e54278f7acc9fb21ceb6aff",
"assets/assets/images/ticketmaster.png": "fd073ccbc3c7dc5263da494aa9d5f995",
"assets/assets/images/card.png": "ecb0248685c2d46d1e1b255da48505da",
"assets/assets/images/logout_menu_logo.svg": "f8118c2d4eca2d12590332d94bfc6524",
"assets/assets/images/profile_delete.svg": "e729dfcff6235ff4f2aa5cd6e80830ae",
"assets/assets/images/travel_img.png": "7dc0dddfb8c5e161ab7833a79ab0f133",
"assets/assets/images/hotel_image_4.png": "c599b9ffeeaf511d71ab3979d2bf66aa",
"assets/assets/images/Card_image_3.png": "37e2c9b9a32dcf2c7a0dd69cad80eafa",
"assets/assets/images/img_event.jpg": "668dc777de2dce22737227249c613651",
"assets/assets/images/img_event.png": "b12f36244edaee8acd0592cc6d1f8152",
"assets/assets/images/send_icon.svg": "cf1db0581239d02e74a40845ec8a4791",
"assets/assets/images/camera-gradient-icon.png": "6d75fc021c971e609ddb9b1d3b09e208",
"assets/assets/images/booking.png": "be437a3d4b4af342fbb56f449554cf82",
"assets/assets/images/Card_image_1.png": "8f2d930855e54f9de444c7a273227673",
"assets/assets/images/ic_map_marker.png": "6a488dd347d68f9da0616fd4607cfd0d",
"assets/assets/images/ai_menu_logo.svg": "400177790ea2f9d324599a52423a1677",
"assets/assets/images/ai_sparkles.png": "24d767d341056cc7d11ee082b476016e",
"assets/assets/images/train.png": "75f55ffd0b396b11d3ead6b56e4bbefb",
"assets/assets/images/ic_cloud.svg": "8408c955790982e938c39bdb0550b497",
"assets/assets/images/arrow.svg": "8786d1d3d9e542597fc666da5480e0f0",
"assets/assets/images/mini-arrow-right.png": "591a4f90826751e2763785277b074801",
"assets/assets/images/person.svg": "9f74396304432c1b5c395e0b3905095f",
"assets/assets/images/img_attraction.png": "e13f51125c429d5de910301546e15846",
"assets/assets/images/applepay_btn.svg": "493d764f3fd7e3716cbb395db61febbd",
"assets/assets/images/Card_image_4.png": "6e8eae326e43011e5882752f3b6769aa",
"assets/assets/images/location_ic.png": "7ce906f3e2130fc12de4f6520ce3edae",
"assets/assets/images/ic_sunny.svg": "330f94a6f88dd68546f0af363a70a67b",
"assets/assets/images/landing_flight.svg": "481882a0feea7494025ee1fc68aa1e22",
"assets/assets/images/hotel_image_3.png": "692a877fd40ff96f566d338c5e6dd65b",
"assets/assets/images/down_arrow_icon.svg": "214b8bd6998a08e17a49ffb0d3d43341",
"assets/assets/images/shield.png": "db3c3497aeb6235ffa5addb57d71271e",
"assets/assets/images/ic_right_arrow.svg": "3f841b8315988b0cbc051a76f6510c2a",
"assets/assets/images/chat_field_image.png": "d960d0767ad274dfcfca2a56e384eada",
"assets/assets/images/profile_user.svg": "65c52021d6a4500a4e32040fb010e25d",
"assets/assets/images/web_ic.png": "bc7977cb93bd093248495a3efc1f8e25",
"assets/assets/images/hotel_image_2.png": "e30c4778ee3bd72aae6795af6c408cd0",
"assets/assets/images/sas_image.png": "15b4d47f5d1d0641488f0a2743b62fb6",
"assets/assets/images/room_image.png": "4affd2de0732ab33c5e6fb55313f0ade",
"assets/assets/images/weather_rainy.png": "c1b8392aa941d20676b462da80e935e4",
"assets/assets/images/person_ic.png": "e38e8ddba959b1500791ccc5c528eb04",
"assets/assets/images/arrow-right.png": "5aa1d75e29f0423a9de1392b9cd9d7b9",
"assets/assets/images/mask_blur.png": "075db16f16e590d1028b8de5e35f4282",
"assets/assets/images/weather_partly_cloudy.png": "acdab59d4d1009418ee9e5e8326ca724",
"assets/assets/images/ic_close.png": "72681b018bff1a6e66613e872da59bce",
"assets/assets/images/img_itinerary_restaurants.png": "f28605351282682d6bbbccf229bd5fde",
"assets/assets/images/ic_cloudy.svg": "ed7ece4ff1db13eb0073b3b1d0e77b99",
"assets/assets/images/new_chat_icon.svg": "0434312d1d4f630dc4cb4ce50943b767",
"assets/assets/images/back_arrow_icon.svg": "eb16c31a2f487504aa91178b322e81b7",
"assets/assets/images/video-gradient-icon.png": "0b7a831b1578f2fa377bd795c67ace3c",
"assets/assets/images/common_plus.svg": "66d54698d4d840792df8c56b8d6ca193",
"assets/assets/images/apple-pay-logo.png": "65925b319471dca1812a0e7e9a9c4b9d",
"assets/assets/images/ic_driving.png": "13e7835a267df61558b6e18c68e8b410",
"assets/assets/images/8-2.png": "a7ba4aa6c5b3c478a9c7824f0bbc2e20",
"assets/assets/images/login_co_star_image.png": "5c47485ffcde2cf093da67e9e0c01529",
"assets/assets/images/mic_glow_icon.svg": "c590b17ef8cd7eced757b285d0c8e5ef",
"assets/assets/images/rest_detail_image_1.png": "ec7d3b7844c69b85439e3c7850686d14",
"assets/assets/images/ic_back_button_with_bg.png": "a1fbfc8d38591dc08cc02635f4d70f08",
"assets/assets/images/airline_bg_flight.png": "acc3469c3cf7da49299895ee7288e8c8",
"assets/assets/images/common_close.svg": "01201d828832c85b4a8b5d2483fbde6d",
"assets/assets/images/calender.svg": "8457b79a87f7425795aceb8003034530",
"assets/assets/images/accor_logo.png": "67c8e1f6bff300432ab760c1f686f0ed",
"assets/assets/images/stack_image_6.png": "21743a88fe2fad9d7b5e84666e82d03e",
"assets/assets/images/ic_add.png": "34c9d6126aaea4c65ff42af0998e8bf8",
"assets/assets/images/16-3.png": "726eeb163a507ccb00f3e3aed73e5162",
"assets/assets/images/map.png": "826ff234736fd33cefc4003b096d3569",
"assets/assets/images/expand_icon.svg": "9a68c694a88eb42ca32a51cd228fdb6d",
"assets/assets/images/ic_walking.png": "2726e2f5c873f560b6d51516490a5579",
"assets/assets/images/rest_detail_image_2.png": "286b0e4b4cff077567bb0d1c09829d60",
"assets/assets/images/gradient_img.png": "ab1ba4cf873aa4e22e15122eaa030425",
"assets/assets/images/calling_camera.svg": "6cba3188a4452201a9b110e733fccc60",
"assets/assets/images/chat_refresh.svg": "2200f3a31dd06f1fec9aa999d31f7578",
"assets/assets/images/stack_image_4.png": "1a442803e4e32dfa27df260e1b885d0b",
"assets/assets/images/blur.png": "78975d1782657c1c873e7ecb6ea3e360",
"assets/assets/images/new_session_icon.png": "b70f999ccd8338302b75e0ff0d559311",
"assets/assets/images/profile_tick.svg": "6d8b631d05cc068666f21dc503faf280",
"assets/assets/images/location_hollow.svg": "6901b557e6bf2aec68ff8d784cc4e247",
"assets/assets/images/stack_image_5.png": "ff5cff200f9b34fe7ed9a7036f9ac08d",
"assets/assets/images/room.png": "38552f40597840a2731e88ab1a73e930",
"assets/assets/images/navbar_icon.svg": "580a9f4bba126fdcb253eda603a86082",
"assets/assets/images/hotel_image.png": "2e4385a6fac5f3d124d9a242098dc064",
"assets/assets/images/chat_field_image.svg": "c2090dbb73440b927d4ed3129dc402d4",
"assets/assets/images/ic_web_search.png": "2905e2758d83f8f7cbe54b7240c507fd",
"assets/assets/images/rest_detail_image_3.png": "e4f455762acb7db2297e94c66fb09f16",
"assets/assets/images/bg_image.png": "0c337abf032840dbcf52ab9626b1cf8a",
"assets/assets/images/menu_icon.svg": "a28b60fbc2f3ef31a9d25d6d91d62379",
"assets/assets/images/arrow_up.svg": "42abcaedd5cade74e98c6fcad2b116ce",
"assets/assets/images/ic_delete.png": "1e477ece28f1563765ff282348249d4b",
"assets/assets/images/chat_images.dart": "c898d21cc1cd217c8db88976c82d68ec",
"assets/assets/images/stack_image_1.png": "f2cf5e07db5327d56c8fd5f04ed59e5b",
"assets/assets/images/apple_card_mobile.png": "12a150f491893de19ce5ef2c3c783a49",
"assets/assets/images/map_user_arrow.png": "44ef36b8adc06607eeaa73d05cb35a12",
"assets/assets/images/ai_sparkles.svg": "b0e7d3cb3cec997f19e546c09039a807",
"assets/assets/images/sidebar_icon.png": "2629de46ed1c45d43c4d94a8805705cf",
"assets/assets/images/ic_rainy.svg": "515e5c4cbc04217e9d902fbec09c84bb",
"assets/assets/images/Oval.png": "59bb00dbe8aee960996b214836a0735a",
"assets/assets/images/white_transparent_line.png": "b992a88e2e3597f00e52b4ae7aa2c950",
"assets/assets/images/flight_double_arrow.svg": "960544a1ba6f546a89208592579f11b5",
"assets/assets/images/map_mobile.png": "8ed4566a50236c76f5a63e41728036ac",
"assets/assets/images/common_up_arrow.svg": "1477165c1cff48422a5118965331537b",
"assets/assets/images/delete_ic.svg": "bcf6f961e2ddf5649cfa315084c7d4f3",
"assets/assets/images/mic_fill.svg": "645eecdef352d70f3c526baeb76d4212",
"assets/assets/images/stack_image_2.png": "6281273be2bb2a862c3fe3c1a43ab197",
"assets/assets/images/location_arrow.svg": "f5dd00987dd11391d0accc94c1c294d6",
"assets/assets/images/flight_bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/dottedLine.png": "78caf41c2f7210d0249884e2aa70774d",
"assets/assets/images/weather_sunny.png": "efc062882d44b0775e78b47722fe43ac",
"assets/assets/images/stack_image_3.png": "bdc7c7567f7f6b362b6f6d0ec01bdc8c",
"assets/assets/images/profile_pic_1.jpeg": "7373833753aa3385677c4f88761480f1",
"assets/assets/images/ic_clock.png": "e6177effaa5c306403faf9b4a6ad80d2",
"assets/assets/images/profile_pic_1.png": "2658947167171387047ebe44876cc401",
"assets/assets/images/14-4.png": "55a7285f8ff4049f5f85113d5d35d5ce",
"assets/assets/images/weather_thunder.png": "7fd0a94f8fbbd2a4b2347403a9c4caed",
"assets/assets/images/ic_charges.png": "ae9751b14f536882a14a4b16f03965e8",
"assets/assets/images/airline_bg_flight.jpeg": "a98e7b9f48b8b275f7f52882d43b1da0",
"assets/assets/images/receipt_icon.svg": "42aa1b82e0a0278651ac32fa006d4fb1",
"assets/assets/images/gallery_icon.svg": "421419c5f4aff9cb7efed3d6c461acb4",
"assets/assets/images/ic_ticket.png": "c228e23d555fdb9c851c2558bf8a854b",
"assets/assets/images/dotted_line.svg": "419648ce966b01ad1d7309b99a8437a2",
"assets/assets/images/bg_img.svg": "b3e0e9f3bd1b51e25447a05bb3a21272",
"assets/assets/images/map_user_car_icon.png": "a836a29b31a2faa578429b1e9632fca4",
"assets/assets/images/bath_icon.svg": "cfe6db2c3f04d4b6b52e097d7b347a3d",
"assets/assets/images/avatar.png": "fc94fe588f66ac4bcb1e623fcec1ac3d",
"assets/assets/images/ic_star.png": "65a62073788579d3152694588ff5c780",
"assets/assets/images/new_chat.svg": "bfc6386fce2d690b7947dcce8998e68a",
"assets/assets/images/common_down_arrow.svg": "e355e1512b102fe99c3d7bad77d5dd3a",
"assets/assets/images/6-5.png": "194a33290f67b64bd528f753e4dc2667",
"assets/assets/images/ic_thunder.svg": "75fa42b4b5eb0ddb6ac79ffdd284e61e",
"assets/assets/images/weather_snowy.png": "e95c1f88ad055a4df7aee21645946211",
"assets/assets/images/profile_pic.avif": "25dc1fd86d89acec63d164addacb5bc3",
"assets/assets/images/collapse_icon.svg": "078ae7d9664f9bacd95adeac95ad55c3",
"assets/assets/images/arrow_down.svg": "96dd5b28588e3899ecd5e5e60b522e6b",
"assets/assets/images/uber-logo.svg": "aed85decc248dcb05dcce0d5554f15ce",
"assets/assets/images/ic_ticket_small.png": "7b3afa5fbccb7a24c525a4d565c4580d",
"assets/assets/images/multitask.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/home_ic.svg": "2458c3dbee5e0d06b3a0a8f6464df992",
"assets/assets/images/dimensions_icon.svg": "85267fe711537d5251590be342959c44",
"assets/assets/images/new_chat_menu_logo.svg": "ea756611f5f7f2467d5041454fc30887",
"assets/assets/images/grab-logo.svg": "c208ac0879639f1d1a57446246e1994b",
"assets/assets/images/thumb_up_icon.svg": "bd514f46284e7f1502fc90e43eae7b0d",
"assets/assets/images/profile_chat.svg": "538106558ee352055b30e5ca662b10ac",
"assets/assets/images/booking_2.png": "790701e9e712f883979021dfe834cd79",
"assets/assets/images/calling_mic_mute_enabled.svg": "5c25e0273aab834cdf87d104033a13d6",
"assets/assets/images/wifi_icon.svg": "3f3978acec833bda85495b15f7fec2ae",
"assets/assets/images/ic_flight.png": "c2eca05bb4c1f69160ff27a8d8eb60f5",
"assets/assets/images/voice_icon.svg": "7ad61e99bd49ef6379417999cd55e3a0",
"assets/assets/images/car.png": "6bb1d4b18242ca124c0a8a16f5614210",
"assets/assets/images/phone-gradient-icon.png": "b650f3cbea387d7f413a1952ea4dfba2",
"assets/assets/images/ic_drop.svg": "ddbc6e7e293a7f2f683056766fdb813b",
"assets/assets/images/apple_card.png": "22e6173f65de0e5b99d5f229a3a3ced8",
"assets/assets/images/bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/co_logo.svg": "0cbc4dbb4e73e4292845324b279f1b3f",
"assets/assets/images/cross_icon.svg": "ea26d652ed1badfbbaf2d66554e129ce",
"assets/assets/images/ai_logo_image.svg": "9e51334b258ab99cf84fdcae2895dc34",
"assets/assets/images/kids_icon.svg": "76a11c90bd5605004fd2f1ae0486fbdd",
"assets/assets/images/review_avatar.png": "e9662f8a86efe68628caf910100bb9dc",
"assets/assets/images/male_icon.svg": "e27dac105cee9ad2833cd0173d69f9f7",
"assets/assets/images/common_left_arrow.svg": "b05cd1e90828c5f4fc8ed2e6b3273780",
"assets/assets/images/uber.png": "249842d9b6605fde08eb6dc601b0fd04",
"assets/assets/images/clock.png": "be6d612963c8aaf229daf3b7cbfffa7e",
"assets/assets/images/login_loader_image.svg": "84297328d89e3ca66e9898dd8e8dd5de",
"assets/assets/images/back_button.svg": "a5cf616f11fdadd4bbcca6575d8b9373",
"assets/assets/images/ac_icon.svg": "1a6f648637ed7125b3119bcce91bbd54",
"assets/assets/images/prompt_refresh.svg": "205c6571459bf9b916b7462340966b91",
"assets/assets/images/1-1.png": "d1e5733703537423d2ff7b4f8f7b8006",
"assets/assets/images/card_image.jpeg": "c7440c572615aa21c5c6b7ac810d7b9c",
"assets/assets/images/img_qr.png": "33d0b886c9d9e8fc181bb0ccc01f6a5c",
"assets/assets/images/romantic_img_7.png": "43249b0fa0f0871757738cbc9d75a91d",
"assets/assets/images/close_button.svg": "faa0135ab09beb2918aa87249f732345",
"assets/assets/images/ic_partially_cloudy.svg": "59fd35fda09cd06162f8318c917f2451",
"assets/assets/images/weather_cloudy.png": "1333f89656804cf874eec449618b0ecc",
"assets/assets/images/location.svg": "226643ea1e13138a76446824f29e05d1",
"assets/assets/images/romantic_img_6.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/multitask_img.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/voice_icon.png": "f15237bbce56d79a6e27bcf6d2d9afe2",
"assets/assets/images/img_flight.jpg": "b9c833608af368997cc66669ebac3b9b",
"assets/assets/images/ic_snowy.svg": "04d44586e3a99221ce2cc9f532815eb3",
"assets/assets/images/star.png": "4b7c888d7378a5939b6766fcbfecaee3",
"assets/assets/images/video_field_image.png": "d249d3129ebd2071796d46c654993c39",
"assets/assets/images/send_message_icon.png": "2ebae83fe706e4000a85f3c9fe8de61c",
"assets/assets/images/female_icon.svg": "7b7255325ba3563a9c3cac3a31e1a7bd",
"assets/assets/images/romantic_img_4.png": "c09fd1b7a85a871f24c42d9c2fb9a80c",
"assets/assets/images/login_co_logo.svg": "d97a4af3e7ff1422f432f0102b47bf6d",
"assets/assets/images/volume_off_icon.svg": "d14fd22fc70b366069cd1fdb5264a06c",
"assets/assets/images/google_logo.svg": "df269be4835b6bd608995af0a35a5c12",
"assets/assets/images/hotel_img.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/ic_two_wheelers.png": "b908bd4a762168894017eacf81fb6c28",
"assets/assets/images/Globe.svg": "a57bc8d534c77973e7cf33d20ea9770a",
"assets/assets/images/romantic_img_5.png": "719fae6070d8db5d9e6719aabda6c4a9",
"assets/assets/images/text_icon.svg": "4ca8fdc932ccfb57e6229409880950da",
"assets/assets/images/fridge_icon.svg": "01022421bc32f562ec311e052adef602",
"assets/assets/images/calling_speaker.svg": "3b2ab704797817585e425e5a8e7f7705",
"assets/assets/images/breakfast.png": "ac0ffe39f8356df56a49e90d4aae8cd3",
"assets/assets/images/multitask.svg": "d0976fde3b00823823f2f85b2c080b28",
"assets/assets/images/img_itinerary_place.png": "0299d15f56efc5943aac365974e79bcc",
"assets/assets/images/caaar.png": "7d54c99a30e33d4cc2c48760ca1998eb",
"assets/assets/images/flight_logo.svg": "379c81fbc58f8dd84c5c630ab6152a3c",
"assets/assets/images/logo.svg": "412a8940baffd2614ce18e5031469cec",
"assets/assets/images/Camera.png": "7d28e934f51645675928008826e5242c",
"assets/assets/images/tv_icon.svg": "1e57529bff5426dc6247e4ce6c0ea5a1",
"assets/assets/images/romantic_img_1.png": "52295981e0bded76c87f309d9ad726f1",
"assets/assets/images/img_itinerary_hotel.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/marker-bg.png": "fa297c125259158622d9b9b8ccf7a532",
"assets/assets/images/bookmark.svg": "7607ebfaa960be55d060379e944dbe37",
"assets/assets/images/book_logo.png": "c0b19959a3998fff9994dc995b9bfdbf",
"assets/assets/images/mic_icon.svg": "b444ce2af463666b09269d3e62d73bfd",
"assets/assets/images/img_restaurant.png": "3843610f19fcd2202a275bde857def4b",
"assets/assets/images/chat_edit.svg": "afd292a1c173d0d703b58c26b6f2be53",
"assets/assets/images/arrow_down.png": "239d326518e847ed2713d95506c297ed",
"assets/assets/images/calling_end_call.svg": "85d8dde2b8630f227a64c3152856fec5",
"assets/assets/images/camera_arrow_icon.svg": "a88ba17244e9b066c3931422ac107aac",
"assets/assets/images/new_chat_old.svg": "b35553daa684eb44fe35c8887c6e2fb6",
"assets/assets/images/img_car.png": "9ce592ee6028461bf5b7454c305a3925",
"assets/assets/images/vacation_1.png": "a58bcb785319399576436d40befd4881",
"assets/assets/images/flight_qr.png": "53985d1c7748df5e81fe960afb22b8fd",
"assets/assets/images/vacation_3.png": "df1e3d94b4559db198b2841ffe8a7966",
"assets/assets/images/trip_img.png": "593b317bef418c7207ac47a6bc40e38c",
"assets/assets/images/romantic_img_2.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/images/flight_attendent_icon.png": "989fcb5738f14a9a909e7e8754ecaee3",
"assets/assets/images/7-3.png": "555ac9ac3bf85cebeadaa52220a2a3d3",
"assets/assets/images/free.png": "21c028c0867459dc8eb68ec31154ea6c",
"assets/assets/images/flight_img.jpeg": "51b40a8f59d7532c00a479b136b5fefa",
"assets/assets/images/romantic_img_3.png": "e734a5f49c3e300f3ca6517a14764ecb",
"assets/assets/images/bg.png": "f3de5d6b5510b2665ffdb98d98b970e2",
"assets/assets/images/ic_transit.png": "8f91fc6fa72f3a8409a48d0e61433daa",
"assets/assets/images/romantic_dinner.png": "a6ea20b963b6f670bf75dc17c0a18896",
"assets/assets/images/close.png": "32606c255887d60bd9beefe1db10df06",
"assets/assets/images/vacation_2.png": "c6182d583b28635f6605a27ab0693876",
"assets/assets/images/online_clock.png": "14ef15eeddfef4b6629243774ba1c377",
"assets/assets/images/call_icon.svg": "eb96444acdd4374f41561f0a559132c4",
"assets/assets/images/card_qr.png": "c48436c0b2e2a759a82a899767ed041d",
"assets/assets/sounds/calling_processing.mp3": "f535b3daaa0753a8fd9b89dadf9f9a21",
"assets/assets/sounds/connected.mp3": "b6718139e9bb2c90d0a5a6b210d0c06c",
"assets/assets/json/itinerary.json": "07da51330f02c4a150416bdfac2cd29c",
"assets/assets/map_style.json": "95da40fcf5b51b5921e27063a050d7bf",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_XBd.ttf": "60d038f8339948f9abe6d1ec71f9864b",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Th.ttf": "502f2f86ebdf57814ef80dce65255ad9",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Bd.ttf": "ad1eda8c833478b335d1e6a933638b68",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_SBd.ttf": "866c142a7c334d452d44b8b61f3fbfec",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Rg.ttf": "dc205ffbee9496e9aac211e9651a95dc",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Hair.ttf": "3eda57e2d8c1acf65da574a7670f5875",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Lt.ttf": "7e84dbc53910e5cfde4df568337d261e",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Md.ttf": "3fe229c0a870d5759fd9f9ace3ac8c22",
"assets/assets/vad/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/assets/vad/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/assets/vad/vad_web.js": "f8f0e1a60f2672a7479acf6f954d768f",
"assets/assets/vad/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/assets/vad/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/assets/vad/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/assets/vad/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/assets/vad/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
