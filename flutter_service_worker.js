'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6a006b16134465e09c0303685bebeedf",
"version.json": "c1db5f4b0a0b5f28070c4594ee4dfbe4",
"index.html": "2b52d50fa319dc3fb3bbf6c96fd6fc0f",
"/": "2b52d50fa319dc3fb3bbf6c96fd6fc0f",
"main.dart.js": "90886e02c598476589a66f274a34e74e",
"404.html": "4b4b4c397838cbbb5ceb3bec74d83159",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "9ec3cdc0277dd02c19db0fcc625a2e6a",
"icons/Icon-192.png": "f227577269e6a65b6b0f2c30f07f2f48",
"icons/Icon-maskable-192.png": "f227577269e6a65b6b0f2c30f07f2f48",
"icons/Icon-maskable-512.png": "1edffbc397bf901019b217f499d85c3d",
"icons/Icon-512.png": "1edffbc397bf901019b217f499d85c3d",
"manifest.json": "ce3b1535d452b67e9bfc969a5da37252",
"assets/AssetManifest.json": "729bb72967d524f0e50de3d78ce01a92",
"assets/NOTICES": "963048eeb4b645399b41adb5a237b83a",
"assets/FontManifest.json": "71cc9f6b0e6a12e50de4e0a663c06c3f",
"assets/AssetManifest.bin.json": "ee07c7491497a4b312d1c4a31353b1d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "507ad209b8d95af3fa8f8972acacea3b",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/packages/vad/assets/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/packages/vad/assets/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/packages/vad/assets/vad_web.js": "f6235790d5907304149d7e34ddb8b712",
"assets/packages/vad/assets/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/packages/vad/assets/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/packages/vad/assets/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/packages/vad/assets/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/packages/vad/assets/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ac835ac93d6974f5e0b6dfdb7d404cc2",
"assets/fonts/MaterialIcons-Regular.otf": "f3aa62a779a4955072e57bf02c1a0e74",
"assets/assets/images/transport_loading_2.png": "ab9a058499b0940303f5c8c803873daa",
"assets/assets/images/Card_image_2.png": "b7bce24cb41eaa4512058af69dab510d",
"assets/assets/images/earth.svg": "d8dccec31e54278f7acc9fb21ceb6aff",
"assets/assets/images/card.png": "ecb0248685c2d46d1e1b255da48505da",
"assets/assets/images/collaborators_avatar.png": "a969d2038970c9cf905ef0ed8b8c46a9",
"assets/assets/images/hotel_loading_1.webp": "6580fc2473b5d3b97bbe36baf76f7b98",
"assets/assets/images/explore_loading_4.webp": "b4800fbd59bc65dac0ed59769e304515",
"assets/assets/images/itinerary_loading_1.webp": "8145df82f00dc7845bdff62dfdca74db",
"assets/assets/images/hotel_image_4.png": "c599b9ffeeaf511d71ab3979d2bf66aa",
"assets/assets/images/home/home_carousel_arrow_right.svg": "8efda68e1308795908c4cfd7525f77c2",
"assets/assets/images/home/web/15.webp": "5e995c21862424b2e4c0ff4d402bf935",
"assets/assets/images/home/web/5.webp": "4d1347121ae50a296772933793f21ce6",
"assets/assets/images/home/web/19.webp": "c479568193e29f6504ee963e0eb9a284",
"assets/assets/images/home/web/9.webp": "f29a8d85e8fdc117d6cb3a80f2e04762",
"assets/assets/images/home/web/8.webp": "6a085778a8de3e9a3eba2e5fa9a074a5",
"assets/assets/images/home/web/18.webp": "506efc94252d65f3873daee8db14514c",
"assets/assets/images/home/web/4.webp": "c7895a150d2f596f7bf097aa48e30f4f",
"assets/assets/images/home/web/14.webp": "ef21e16311e318542ab0278ad442575a",
"assets/assets/images/home/web/13.webp": "85b07ec8a4190689b4d649e47169dd48",
"assets/assets/images/home/web/3.webp": "3e6364d2e51248f7ea5b609f1c09f247",
"assets/assets/images/home/web/2.webp": "ca09bb6ecd11a76ecdab75b69798b59b",
"assets/assets/images/home/web/12.webp": "03cebc6e3be405ca3078272c120dedb9",
"assets/assets/images/home/web/11.webp": "2960da04bd03926bbb0dec42218b8ad6",
"assets/assets/images/home/web/10.webp": "45c08051771371cd5360ef7e35eeabad",
"assets/assets/images/home/web/7.webp": "6589adf901aa263db8a80beb042779dd",
"assets/assets/images/home/web/17.webp": "c166afda5fc42402bec00ed94e8b3f51",
"assets/assets/images/home/web/20.webp": "03cc9fed128613fa0852e8b2a2ad9d0c",
"assets/assets/images/home/web/1.png": "ec70ce5df0d59370c3271aa2c6b841e2",
"assets/assets/images/home/web/16.webp": "18584aac54237c8f4ff5a3975fd0fce9",
"assets/assets/images/home/web/6.webp": "27b630e7e05baa1846c19117fe2fc6ba",
"assets/assets/images/home/mobile/8.png": "0a13980c7240e537605dbd452c432856",
"assets/assets/images/home/mobile/9.png": "fbc17cb96ca1ad8ef9042db30cf7e4fd",
"assets/assets/images/home/mobile/14.png": "1f5c710f13b4d419c677f5fce13103b8",
"assets/assets/images/home/mobile/15.png": "b210e918ac45562eea786e9cdf939536",
"assets/assets/images/home/mobile/17.png": "e9ff2901c4a1c9b3620297fa6ffdb580",
"assets/assets/images/home/mobile/16.png": "df2f6b31bd46a624826a38eec247bede",
"assets/assets/images/home/mobile/12.png": "7aedc794027aa3e6ee74c18e336af7cf",
"assets/assets/images/home/mobile/13.png": "87df5dc6e347905a7f95c5295376f3ea",
"assets/assets/images/home/mobile/11.png": "4ce7de0d47fb0c7ed0327c0f4a46c683",
"assets/assets/images/home/mobile/10.png": "05b6392709c0596af2ffcd032440898f",
"assets/assets/images/home/mobile/20.png": "d2d511c7589b54eeaa7189be56cafb5c",
"assets/assets/images/home/mobile/18.png": "f6573a064f74a4a895c7cc80632c4261",
"assets/assets/images/home/mobile/19.png": "9eaf6cf862af39827c67db1814edc543",
"assets/assets/images/home/mobile/4.png": "d872fdf73cd5f4c60067a78c800023fe",
"assets/assets/images/home/mobile/5.png": "29a0bcba25a792d47d88962855057637",
"assets/assets/images/home/mobile/7.png": "9174d1f4d57200558400576f80563183",
"assets/assets/images/home/mobile/6.png": "d1b348ca0532ade39d2222570ffed9d6",
"assets/assets/images/home/mobile/2.png": "d42453a501ff07820a54e492226b4060",
"assets/assets/images/home/mobile/3.png": "fc5ef53ef105c15b9e5d448d5e192851",
"assets/assets/images/home/mobile/1.png": "1cc4ed2eb0e743e21a20bf52741a88ce",
"assets/assets/images/home/home_carousel_arrow_left.svg": "fc48d387e789ae514d6bf4290cd9907e",
"assets/assets/images/Card_image_3.png": "37e2c9b9a32dcf2c7a0dd69cad80eafa",
"assets/assets/images/transport_loading_3.png": "aa0f627e9e8020c8a9892d5983af546c",
"assets/assets/images/img_event.jpg": "668dc777de2dce22737227249c613651",
"assets/assets/images/img_event.png": "b12f36244edaee8acd0592cc6d1f8152",
"assets/assets/images/video_bot_speaking.svg": "d87e00000cff4a3653f4b37b410637da",
"assets/assets/images/event_loader_3.webp": "e89b9d865e627378ab50f3b227f6ac58",
"assets/assets/images/weather-rainy.png": "9d3a4e50654640304ecff18c4594cd95",
"assets/assets/images/booking.png": "be437a3d4b4af342fbb56f449554cf82",
"assets/assets/images/transport_loading_1.png": "527c009bc390376d9b856044356f8693",
"assets/assets/images/Card_image_1.png": "8f2d930855e54f9de444c7a273227673",
"assets/assets/images/ic_map_marker.png": "6a488dd347d68f9da0616fd4607cfd0d",
"assets/assets/images/video_camera_off.svg": "7913545dc294edca722b40eaf13da4b0",
"assets/assets/images/view_the_handbook_icon.svg": "0826b510b390846414026370c3e7fa9f",
"assets/assets/images/ai_sparkles.png": "24d767d341056cc7d11ee082b476016e",
"assets/assets/images/video_expand.svg": "1f832a9f2392232df126e1de6e449afc",
"assets/assets/images/train.png": "75f55ffd0b396b11d3ead6b56e4bbefb",
"assets/assets/images/ic_cloud.svg": "8408c955790982e938c39bdb0550b497",
"assets/assets/images/arrow.svg": "8786d1d3d9e542597fc666da5480e0f0",
"assets/assets/images/mini-arrow-right.png": "591a4f90826751e2763785277b074801",
"assets/assets/images/person.svg": "9f74396304432c1b5c395e0b3905095f",
"assets/assets/images/img_attraction.png": "e13f51125c429d5de910301546e15846",
"assets/assets/images/logo_ic.svg": "30f5003817d0a7cdc85c3be6f7b55653",
"assets/assets/images/launcher.png": "c32fa032b56fca83a5de2bee7a7452bd",
"assets/assets/images/applepay_btn.svg": "493d764f3fd7e3716cbb395db61febbd",
"assets/assets/images/transport_loading_4.png": "1e7c04b745f8d0b0f025e17806011938",
"assets/assets/images/Card_image_4.png": "6e8eae326e43011e5882752f3b6769aa",
"assets/assets/images/location_ic.png": "7ce906f3e2130fc12de4f6520ce3edae",
"assets/assets/images/landing_flight.svg": "481882a0feea7494025ee1fc68aa1e22",
"assets/assets/images/hotel_image_3.png": "692a877fd40ff96f566d338c5e6dd65b",
"assets/assets/images/chat_field_image.png": "d960d0767ad274dfcfca2a56e384eada",
"assets/assets/images/video_microphone_off.svg": "028246bb9c146265e73597cadf02c1a8",
"assets/assets/images/envelope.png": "060f76627282160214dd93ccffae8e10",
"assets/assets/images/web_ic.png": "bc7977cb93bd093248495a3efc1f8e25",
"assets/assets/images/hotel_image_2.png": "e30c4778ee3bd72aae6795af6c408cd0",
"assets/assets/images/sas_image.png": "15b4d47f5d1d0641488f0a2743b62fb6",
"assets/assets/images/itinerary_view_icon.svg": "af64aafe62c696694d7d5616cfbb0a31",
"assets/assets/images/room_image.png": "4affd2de0732ab33c5e6fb55313f0ade",
"assets/assets/images/restaurant_loading_1.webp": "014c63c32ccfeb117b0b8b88455453b1",
"assets/assets/images/weather_rainy.png": "c1b8392aa941d20676b462da80e935e4",
"assets/assets/images/event_loader_2.webp": "652e986f2717d1e9eac1690a5870a6b5",
"assets/assets/images/arrow-right.png": "5aa1d75e29f0423a9de1392b9cd9d7b9",
"assets/assets/images/mask_blur.png": "075db16f16e590d1028b8de5e35f4282",
"assets/assets/images/weather_partly_cloudy.png": "acdab59d4d1009418ee9e5e8326ca724",
"assets/assets/images/ic_close.png": "72681b018bff1a6e66613e872da59bce",
"assets/assets/images/img_itinerary_restaurants.png": "f28605351282682d6bbbccf229bd5fde",
"assets/assets/images/common_plus.svg": "66d54698d4d840792df8c56b8d6ca193",
"assets/assets/images/apple-pay-logo.png": "65925b319471dca1812a0e7e9a9c4b9d",
"assets/assets/images/ic_driving.png": "3eb68bba10e34737ab69c4b9c103500f",
"assets/assets/images/rest_detail_image_1.png": "ec7d3b7844c69b85439e3c7850686d14",
"assets/assets/images/mic_black_ic.svg": "ae21c4cf769f374c6c1fff4c43111a83",
"assets/assets/images/ic_back_button_with_bg.png": "a1fbfc8d38591dc08cc02635f4d70f08",
"assets/assets/images/video_user_speaking.svg": "30695dcf095e8f71cb8a3e042173e33b",
"assets/assets/images/airline_bg_flight.png": "acc3469c3cf7da49299895ee7288e8c8",
"assets/assets/images/common_close.svg": "01201d828832c85b4a8b5d2483fbde6d",
"assets/assets/images/calender.svg": "8457b79a87f7425795aceb8003034530",
"assets/assets/images/stack_image_6.png": "21743a88fe2fad9d7b5e84666e82d03e",
"assets/assets/images/ic_photo_gallery.png": "fdfce909e18a1b955377ab8bc5424afa",
"assets/assets/images/video_microphone_on.svg": "bff45ebf85e78288b7951f0e949f45a1",
"assets/assets/images/ic_add.png": "34c9d6126aaea4c65ff42af0998e8bf8",
"assets/assets/images/edit-small-2.svg": "8d25abf480e6eb4351dc9ff9d39d79c0",
"assets/assets/images/itinerary_update_icon.svg": "435a81af57c6a9b1cfd823c8d1331b46",
"assets/assets/images/map.png": "826ff234736fd33cefc4003b096d3569",
"assets/assets/images/sidebar-simple-left-wide.svg": "1530b96f55ded5ac9a33a9a6313149e1",
"assets/assets/images/ic_walking.png": "5963bd98e597fcb1e72faadd901f8377",
"assets/assets/images/rest_detail_image_2.png": "286b0e4b4cff077567bb0d1c09829d60",
"assets/assets/images/stack_image_4.png": "1a442803e4e32dfa27df260e1b885d0b",
"assets/assets/images/blur.png": "78975d1782657c1c873e7ecb6ea3e360",
"assets/assets/images/login_landing_bg.png": "b61873b084357cc2014ee11e89dcde65",
"assets/assets/images/profile_tick.svg": "6d8b631d05cc068666f21dc503faf280",
"assets/assets/images/location_hollow.svg": "6901b557e6bf2aec68ff8d784cc4e247",
"assets/assets/images/stack_image_5.png": "ff5cff200f9b34fe7ed9a7036f9ac08d",
"assets/assets/images/hotel_image.png": "2e4385a6fac5f3d124d9a242098dc064",
"assets/assets/images/explore_loading_2.webp": "0ed764e3c81b391cedb254c94532d83a",
"assets/assets/images/video_logo.svg": "8083f42aeb82dc255770a05368b6bd0d",
"assets/assets/images/chat_field_image.svg": "c2090dbb73440b927d4ed3129dc402d4",
"assets/assets/images/itinerary_copy_icon.svg": "200b738f39ea75f75f1f6c16f4aa5d1d",
"assets/assets/images/rest_detail_image_3.png": "e4f455762acb7db2297e94c66fb09f16",
"assets/assets/images/google_icon.svg": "2a52fdc6499ca0eeff214161bfd8a7f9",
"assets/assets/images/bg_image.png": "0c337abf032840dbcf52ab9626b1cf8a",
"assets/assets/images/event_loader_4.webp": "9e446705ec61569d5793d6a2a58e87f8",
"assets/assets/images/ic_delete.png": "1e477ece28f1563765ff282348249d4b",
"assets/assets/images/explore_loading_3.webp": "0dbbcf40b4dd6fac4b40e1f622ec3915",
"assets/assets/images/stack_image_1.png": "f2cf5e07db5327d56c8fd5f04ed59e5b",
"assets/assets/images/apple_card_mobile.png": "12a150f491893de19ce5ef2c3c783a49",
"assets/assets/images/video_speaker_on.svg": "630082c794bdc46c3435a93881969067",
"assets/assets/images/map_user_arrow.png": "dd7bb8d06051e33239121f7964b757ac",
"assets/assets/images/ai_sparkles.svg": "b0e7d3cb3cec997f19e546c09039a807",
"assets/assets/images/white_transparent_line.png": "b992a88e2e3597f00e52b4ae7aa2c950",
"assets/assets/images/flight_double_arrow.svg": "960544a1ba6f546a89208592579f11b5",
"assets/assets/images/map_mobile.png": "8ed4566a50236c76f5a63e41728036ac",
"assets/assets/images/common_up_arrow.svg": "1477165c1cff48422a5118965331537b",
"assets/assets/images/delete_ic.svg": "bcf6f961e2ddf5649cfa315084c7d4f3",
"assets/assets/images/stack_image_2.png": "6281273be2bb2a862c3fe3c1a43ab197",
"assets/assets/images/location_arrow.svg": "f5dd00987dd11391d0accc94c1c294d6",
"assets/assets/images/video_minimize.svg": "ac89012c9037d992dea6b0369a1f0b8f",
"assets/assets/images/flight_bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/dottedLine.png": "78caf41c2f7210d0249884e2aa70774d",
"assets/assets/images/weather_sunny.png": "efc062882d44b0775e78b47722fe43ac",
"assets/assets/images/stack_image_3.png": "bdc7c7567f7f6b362b6f6d0ec01bdc8c",
"assets/assets/images/video_exit.svg": "729fd64d727d7491f87d3e9ac2f2c5be",
"assets/assets/images/ic_clock.png": "e6177effaa5c306403faf9b4a6ad80d2",
"assets/assets/images/mic_background_complex.svg": "346d818850f51bb2bfe218a9fd40c3af",
"assets/assets/images/weather_thunder.png": "7fd0a94f8fbbd2a4b2347403a9c4caed",
"assets/assets/images/ic_charges.png": "ae9751b14f536882a14a4b16f03965e8",
"assets/assets/images/receipt_icon.svg": "42aa1b82e0a0278651ac32fa006d4fb1",
"assets/assets/images/close-btn.png": "6534f0183a91553e4bab46c9e1d0d4cd",
"assets/assets/images/co_star_logo_dark.png": "30d32c95c018d9f69949541a987a911e",
"assets/assets/images/ic_ticket.png": "c228e23d555fdb9c851c2558bf8a854b",
"assets/assets/images/dotted_line.svg": "419648ce966b01ad1d7309b99a8437a2",
"assets/assets/images/restaurant_loading_4.webp": "ba1795c8fc74fb29d3c4f2a50c9d4a85",
"assets/assets/images/map_user_car_icon.png": "4255ce8bfeea94937af6ee30c10809f3",
"assets/assets/images/bath_icon.svg": "cfe6db2c3f04d4b6b52e097d7b347a3d",
"assets/assets/images/avatar.png": "fc94fe588f66ac4bcb1e623fcec1ac3d",
"assets/assets/images/ic_star.png": "65a62073788579d3152694588ff5c780",
"assets/assets/images/common_down_arrow.svg": "e355e1512b102fe99c3d7bad77d5dd3a",
"assets/assets/images/prev_icon.svg": "1d2fa5d4417f7691c075a8eca486b162",
"assets/assets/images/copy_icon.svg": "c6cdea96bceac01b9477cc8df322118d",
"assets/assets/images/weather_snowy.png": "e95c1f88ad055a4df7aee21645946211",
"assets/assets/images/arrow_down.svg": "96dd5b28588e3899ecd5e5e60b522e6b",
"assets/assets/images/flight_loader_4.png": "c956fd7d6e97ddaf8dd9080e3e3c24a3",
"assets/assets/images/ic_ticket_small.png": "7b3afa5fbccb7a24c525a4d565c4580d",
"assets/assets/images/multitask.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/weather-sun.png": "a9a6cb86a6191c3333190c7f859ecee1",
"assets/assets/images/home_ic.svg": "2458c3dbee5e0d06b3a0a8f6464df992",
"assets/assets/images/dimensions_icon.svg": "85267fe711537d5251590be342959c44",
"assets/assets/images/thumb_up_icon.svg": "bd514f46284e7f1502fc90e43eae7b0d",
"assets/assets/images/default_event_icon.png": "57f8f7a1d3eb29373aa76dbc16eb56a7",
"assets/assets/images/booking_2.png": "790701e9e712f883979021dfe834cd79",
"assets/assets/images/hotel_loading_4.webp": "81dce04a559766a6a33e62336560dfd7",
"assets/assets/images/flight_loader_1.png": "4ff88cfcfcaa4c851a5ffdbe999b8ff6",
"assets/assets/images/explore_loading_1.webp": "9cfe134ec4b944441f63465c60fba63c",
"assets/assets/images/itinerary_loading_4.webp": "cdd5d74dfba239391d763285dd69bb38",
"assets/assets/images/wifi_icon.svg": "3f3978acec833bda85495b15f7fec2ae",
"assets/assets/images/ic_flight.png": "c2eca05bb4c1f69160ff27a8d8eb60f5",
"assets/assets/images/voice_icon.svg": "7ad61e99bd49ef6379417999cd55e3a0",
"assets/assets/images/car.png": "6bb1d4b18242ca124c0a8a16f5614210",
"assets/assets/images/weather-windy.png": "900a59e3c096cffd84a0fb0ef56ce2ba",
"assets/assets/images/ic_drop.svg": "ddbc6e7e293a7f2f683056766fdb813b",
"assets/assets/images/apple_card.png": "22e6173f65de0e5b99d5f229a3a3ced8",
"assets/assets/images/ic_itinerary.png": "b5020234e37f010fe730de16d82fe9f4",
"assets/assets/images/flight_loader_3.png": "7557fea26c16f0b2c11050e5c5219214",
"assets/assets/images/bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/kids_icon.svg": "c1cfaa5a115db51674ed72bd0f8d7d80",
"assets/assets/images/flight_loader_2.png": "419f56e82a8838748a4de950a4eb5569",
"assets/assets/images/review_avatar.png": "e9662f8a86efe68628caf910100bb9dc",
"assets/assets/images/male_icon.svg": "e27dac105cee9ad2833cd0173d69f9f7",
"assets/assets/images/common_left_arrow.svg": "b05cd1e90828c5f4fc8ed2e6b3273780",
"assets/assets/images/uber.png": "249842d9b6605fde08eb6dc601b0fd04",
"assets/assets/images/clock.png": "be6d612963c8aaf229daf3b7cbfffa7e",
"assets/assets/images/login_loader_image.svg": "84297328d89e3ca66e9898dd8e8dd5de",
"assets/assets/images/back_button.svg": "a5cf616f11fdadd4bbcca6575d8b9373",
"assets/assets/images/ac_icon.svg": "1a6f648637ed7125b3119bcce91bbd54",
"assets/assets/images/event_loader_1.webp": "0bae17052e45a666f0d4d751546031ef",
"assets/assets/images/weather-cloudy.png": "103672a6ff40ccb1f4669966f57a9fb2",
"assets/assets/images/card_image.jpeg": "c7440c572615aa21c5c6b7ac810d7b9c",
"assets/assets/images/img_qr.png": "33d0b886c9d9e8fc181bb0ccc01f6a5c",
"assets/assets/images/video_camera_switch.svg": "f9381a3717b82b24cf75cf3365fe86ab",
"assets/assets/images/romantic_img_7.png": "43249b0fa0f0871757738cbc9d75a91d",
"assets/assets/images/close_button.svg": "faa0135ab09beb2918aa87249f732345",
"assets/assets/images/itinerary_loading_3.webp": "18fdec00d2029a8d366f686628a3a53f",
"assets/assets/images/hotel_loading_3.webp": "45df3bd2926e765affaece94cb97b942",
"assets/assets/images/weather_cloudy.png": "1333f89656804cf874eec449618b0ecc",
"assets/assets/images/location.svg": "226643ea1e13138a76446824f29e05d1",
"assets/assets/images/video_speaker_off.svg": "5def0234dd18980d3536ba6ea154fb42",
"assets/assets/images/romantic_img_6.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/voice_icon.png": "f15237bbce56d79a6e27bcf6d2d9afe2",
"assets/assets/images/img_flight.jpg": "b9c833608af368997cc66669ebac3b9b",
"assets/assets/images/mic_icon_complex.svg": "a49295a71ad51e569c4281537cbc246b",
"assets/assets/images/next.png": "acd9985488dfdc4293a1ae8611c570e7",
"assets/assets/images/itinerary_share_icon.svg": "51ebe4e4d2cb48d4d2949b9a91c56218",
"assets/assets/images/share.svg": "c3578734f5998ed8022c41474316f351",
"assets/assets/images/star.png": "4b7c888d7378a5939b6766fcbfecaee3",
"assets/assets/images/video_field_image.png": "d249d3129ebd2071796d46c654993c39",
"assets/assets/images/itinerary_generate_icon.svg": "83e64a7ee7ca79195e41c5b9f74d657d",
"assets/assets/images/female_icon.svg": "7b7255325ba3563a9c3cac3a31e1a7bd",
"assets/assets/images/romantic_img_4.png": "c09fd1b7a85a871f24c42d9c2fb9a80c",
"assets/assets/images/volume_off_icon.svg": "d14fd22fc70b366069cd1fdb5264a06c",
"assets/assets/images/login_web.webp": "7196825300b354174727fd8905eedbf4",
"assets/assets/images/google_logo.svg": "df269be4835b6bd608995af0a35a5c12",
"assets/assets/images/hotel_img.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/ic_two_wheelers.png": "5ac1aaa03debe6354bacd62d30c482bd",
"assets/assets/images/line.png": "bbb3486ce39d2cbe5646c5ff7226c3b5",
"assets/assets/images/romantic_img_5.png": "719fae6070d8db5d9e6719aabda6c4a9",
"assets/assets/images/text_icon.svg": "4ca8fdc932ccfb57e6229409880950da",
"assets/assets/images/restaurant_loading_2.webp": "7a912c9e012602fe2f3c4de79244dd85",
"assets/assets/images/fridge_icon.svg": "01022421bc32f562ec311e052adef602",
"assets/assets/images/session_owner_icon.svg": "f11f9b5f25e9d95bf63cda9662a45f7f",
"assets/assets/images/breakfast.png": "ac0ffe39f8356df56a49e90d4aae8cd3",
"assets/assets/images/multitask.svg": "d0976fde3b00823823f2f85b2c080b28",
"assets/assets/images/img_itinerary_place.png": "0299d15f56efc5943aac365974e79bcc",
"assets/assets/images/logout_icon.svg": "3703b5da701cf2e1d670ca21fb3eb802",
"assets/assets/images/caaar.png": "7d54c99a30e33d4cc2c48760ca1998eb",
"assets/assets/images/logo.svg": "412a8940baffd2614ce18e5031469cec",
"assets/assets/images/Camera.png": "7d28e934f51645675928008826e5242c",
"assets/assets/images/restaurant_loading_3.webp": "55bf85718064155d6b0d229548a6ac6d",
"assets/assets/images/tv_icon.svg": "1e57529bff5426dc6247e4ce6c0ea5a1",
"assets/assets/images/romantic_img_1.png": "52295981e0bded76c87f309d9ad726f1",
"assets/assets/images/img_itinerary_hotel.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/marker-bg.png": "fa297c125259158622d9b9b8ccf7a532",
"assets/assets/images/bookmark.svg": "7607ebfaa960be55d060379e944dbe37",
"assets/assets/images/next_icon.svg": "a600fee1b9b685f1d5ee45b09b5ee6b5",
"assets/assets/images/book_logo.png": "c0b19959a3998fff9994dc995b9bfdbf",
"assets/assets/images/img_restaurant.png": "3843610f19fcd2202a275bde857def4b",
"assets/assets/images/web_search_close_icon.svg": "3bfd5f54686fc362f2220877898898d6",
"assets/assets/images/arrow_down.png": "239d326518e847ed2713d95506c297ed",
"assets/assets/images/previous.png": "138f33413ea904443471b76fb92283b5",
"assets/assets/images/new_chat_old.svg": "b35553daa684eb44fe35c8887c6e2fb6",
"assets/assets/images/vacation_1.png": "a58bcb785319399576436d40befd4881",
"assets/assets/images/airplane.svg": "67902c0c076ce8f94b78845b6aea49b5",
"assets/assets/images/flight_qr.png": "53985d1c7748df5e81fe960afb22b8fd",
"assets/assets/images/vacation_3.png": "df1e3d94b4559db198b2841ffe8a7966",
"assets/assets/images/video_camera_on.svg": "c253522f7d198b6fcd714fd95ed9812b",
"assets/assets/images/trip_img.png": "593b317bef418c7207ac47a6bc40e38c",
"assets/assets/images/romantic_img_2.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/images/co_star_logo_light.png": "2fb8b461227629af01b16f34f238405c",
"assets/assets/images/flight_attendent_icon.png": "989fcb5738f14a9a909e7e8754ecaee3",
"assets/assets/images/hotel_loading_2.webp": "5bbec46a418a84f76892a8c983882268",
"assets/assets/images/free.png": "21c028c0867459dc8eb68ec31154ea6c",
"assets/assets/images/flight_img.jpeg": "51b40a8f59d7532c00a479b136b5fefa",
"assets/assets/images/romantic_img_3.png": "e734a5f49c3e300f3ca6517a14764ecb",
"assets/assets/images/itinerary_loading_2.webp": "83cde70063e71e6bc31fabe4cf3ed986",
"assets/assets/images/bg.png": "f3de5d6b5510b2665ffdb98d98b970e2",
"assets/assets/images/ic_transit.png": "9bb761f2fa016e5e56fb610ef8649f3a",
"assets/assets/images/romantic_dinner.png": "a6ea20b963b6f670bf75dc17c0a18896",
"assets/assets/images/close.png": "32606c255887d60bd9beefe1db10df06",
"assets/assets/images/vacation_2.png": "c6182d583b28635f6605a27ab0693876",
"assets/assets/images/card_qr.png": "c48436c0b2e2a759a82a899767ed041d",
"assets/assets/sounds/calling_processing.mp3": "f535b3daaa0753a8fd9b89dadf9f9a21",
"assets/assets/sounds/connected.mp3": "b6718139e9bb2c90d0a5a6b210d0c06c",
"assets/assets/json/itinerary.json": "2fe1a1a923fa93f82cc8273d9a50d9b9",
"assets/assets/json/loop_particles.json": "fc5373b4071f161845f73cc82515fae0",
"assets/assets/map_style.json": "d65951bb0b525034451c725e18ee5fa0",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Bd.ttf": "4fd1f9342a9c5c887ab572347dff1b55",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Md.ttf": "ba440fe7e6225baf19777d00da55f195",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Lt.ttf": "cafd6f0b8c8097a2e5d5d28bfcb8b376",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Rg.ttf": "f8a1f753cec49290d7e7a04cc9dce679",
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
