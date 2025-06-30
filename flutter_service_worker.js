'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5964b419d8dc4cfb351c6d2e1e43b102",
"assets/AssetManifest.bin.json": "c52eea16a80c5023551133c90b701d36",
"assets/AssetManifest.json": "fbc7f63dc4b5ee1c1e6baeb1e4fe9dd0",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Bd.ttf": "4fd1f9342a9c5c887ab572347dff1b55",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Hair.ttf": "0fde8d64516f9e824e4b68cfc33b6055",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Lt.ttf": "cafd6f0b8c8097a2e5d5d28bfcb8b376",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Md.ttf": "ba440fe7e6225baf19777d00da55f195",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Rg.ttf": "f8a1f753cec49290d7e7a04cc9dce679",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_SBd.ttf": "967de7e921243d4de442ed2af5fcd138",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Th.ttf": "fc5e5e81185375efdaa01793ac8bf90b",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_XBd.ttf": "e22956680492ce7af68027f0e15e98fd",
"assets/assets/images/ac_icon.svg": "94856de95e1538405a21281d91893545",
"assets/assets/images/airline_bg_flight.png": "acc3469c3cf7da49299895ee7288e8c8",
"assets/assets/images/airplane.svg": "8c0659267832e4b35c417bff39a89d10",
"assets/assets/images/ai_sparkles.png": "24d767d341056cc7d11ee082b476016e",
"assets/assets/images/ai_sparkles.svg": "7f3f69ff0391f49a63aaecc5c6a8d94a",
"assets/assets/images/apple-pay-logo.png": "65925b319471dca1812a0e7e9a9c4b9d",
"assets/assets/images/applepay_btn.svg": "719b215dc02268c86bc45ef529d5e09d",
"assets/assets/images/apple_card.png": "22e6173f65de0e5b99d5f229a3a3ced8",
"assets/assets/images/apple_card_mobile.png": "12a150f491893de19ce5ef2c3c783a49",
"assets/assets/images/arrow-right.png": "5aa1d75e29f0423a9de1392b9cd9d7b9",
"assets/assets/images/arrow.svg": "1d2ab9585d6e9f51e9451b09cfdab333",
"assets/assets/images/arrow_down.png": "239d326518e847ed2713d95506c297ed",
"assets/assets/images/arrow_down.svg": "a21652d697172d3ab0669c61de875fa0",
"assets/assets/images/avatar.png": "fc94fe588f66ac4bcb1e623fcec1ac3d",
"assets/assets/images/back_button.svg": "0021199046a94dd50de1a026abcd4cc3",
"assets/assets/images/bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/bath_icon.svg": "bf8a5ea6222fcbb5ac9e8674e1419258",
"assets/assets/images/bg.png": "f3de5d6b5510b2665ffdb98d98b970e2",
"assets/assets/images/bg_image.png": "0c337abf032840dbcf52ab9626b1cf8a",
"assets/assets/images/blur.png": "78975d1782657c1c873e7ecb6ea3e360",
"assets/assets/images/booking.png": "be437a3d4b4af342fbb56f449554cf82",
"assets/assets/images/booking_2.png": "790701e9e712f883979021dfe834cd79",
"assets/assets/images/bookmark.svg": "b3979264600251578547f6e40579fd3e",
"assets/assets/images/book_logo.png": "c0b19959a3998fff9994dc995b9bfdbf",
"assets/assets/images/breakfast.png": "ac0ffe39f8356df56a49e90d4aae8cd3",
"assets/assets/images/caaar.png": "7d54c99a30e33d4cc2c48760ca1998eb",
"assets/assets/images/calender.svg": "fe041b68d94233aff1f6ce3434fe4f64",
"assets/assets/images/Camera.png": "7d28e934f51645675928008826e5242c",
"assets/assets/images/car.png": "6bb1d4b18242ca124c0a8a16f5614210",
"assets/assets/images/card.png": "ecb0248685c2d46d1e1b255da48505da",
"assets/assets/images/card_image.jpeg": "c7440c572615aa21c5c6b7ac810d7b9c",
"assets/assets/images/Card_image_1.png": "8f2d930855e54f9de444c7a273227673",
"assets/assets/images/Card_image_2.png": "b7bce24cb41eaa4512058af69dab510d",
"assets/assets/images/Card_image_3.png": "37e2c9b9a32dcf2c7a0dd69cad80eafa",
"assets/assets/images/Card_image_4.png": "6e8eae326e43011e5882752f3b6769aa",
"assets/assets/images/card_qr.png": "c48436c0b2e2a759a82a899767ed041d",
"assets/assets/images/chat_field_image.png": "d960d0767ad274dfcfca2a56e384eada",
"assets/assets/images/chat_field_image.svg": "32460dbb813f58bdff661b5b8b9fef54",
"assets/assets/images/clock.png": "be6d612963c8aaf229daf3b7cbfffa7e",
"assets/assets/images/close-btn.png": "6534f0183a91553e4bab46c9e1d0d4cd",
"assets/assets/images/close.png": "32606c255887d60bd9beefe1db10df06",
"assets/assets/images/close_button.svg": "371c3234279a3ef42af4cfafaf24812b",
"assets/assets/images/common_close.svg": "3188bb55811f781043ce19c535d5493f",
"assets/assets/images/common_down_arrow.svg": "4e93a11da2b3936191a9015337b5ea6b",
"assets/assets/images/common_left_arrow.svg": "40e261e6f1a76fe3d80cd5cb952a98ce",
"assets/assets/images/common_plus.svg": "7092fc0c28c8692bb5008f53136e0d2c",
"assets/assets/images/common_up_arrow.svg": "24aca75515c513f51a97008e509e708b",
"assets/assets/images/co_star_logo_dark.png": "30d32c95c018d9f69949541a987a911e",
"assets/assets/images/co_star_logo_light.png": "2fb8b461227629af01b16f34f238405c",
"assets/assets/images/default_event_icon.png": "57f8f7a1d3eb29373aa76dbc16eb56a7",
"assets/assets/images/delete_ic.svg": "e65629208623dbbd386b39dc63e4059e",
"assets/assets/images/dimensions_icon.svg": "5018a611a7a8e313540a466ab73ed46e",
"assets/assets/images/dottedLine.png": "78caf41c2f7210d0249884e2aa70774d",
"assets/assets/images/dotted_line.svg": "097ab720e3037440e592ee514a0a2ea0",
"assets/assets/images/earth.svg": "a6c3a058eaf5ce41cba8987473e296fc",
"assets/assets/images/edit-small-2.svg": "f5b206f5aec8416c847d16d286ff6487",
"assets/assets/images/envelope.png": "060f76627282160214dd93ccffae8e10",
"assets/assets/images/event_loader_1.webp": "0bae17052e45a666f0d4d751546031ef",
"assets/assets/images/event_loader_2.webp": "652e986f2717d1e9eac1690a5870a6b5",
"assets/assets/images/event_loader_3.webp": "e89b9d865e627378ab50f3b227f6ac58",
"assets/assets/images/event_loader_4.webp": "9e446705ec61569d5793d6a2a58e87f8",
"assets/assets/images/explore_loading_1.webp": "9cfe134ec4b944441f63465c60fba63c",
"assets/assets/images/explore_loading_2.webp": "0ed764e3c81b391cedb254c94532d83a",
"assets/assets/images/explore_loading_3.webp": "0dbbcf40b4dd6fac4b40e1f622ec3915",
"assets/assets/images/explore_loading_4.webp": "b4800fbd59bc65dac0ed59769e304515",
"assets/assets/images/female_icon.svg": "f478528ac3b012233ebfc8f37ceef392",
"assets/assets/images/flight_attendent_icon.png": "989fcb5738f14a9a909e7e8754ecaee3",
"assets/assets/images/flight_bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/flight_double_arrow.svg": "2604ceb1a4349578200ddfd57a32b379",
"assets/assets/images/flight_img.jpeg": "51b40a8f59d7532c00a479b136b5fefa",
"assets/assets/images/flight_loader_1.png": "4ff88cfcfcaa4c851a5ffdbe999b8ff6",
"assets/assets/images/flight_loader_2.png": "419f56e82a8838748a4de950a4eb5569",
"assets/assets/images/flight_loader_3.png": "7557fea26c16f0b2c11050e5c5219214",
"assets/assets/images/flight_loader_4.png": "c956fd7d6e97ddaf8dd9080e3e3c24a3",
"assets/assets/images/flight_qr.png": "53985d1c7748df5e81fe960afb22b8fd",
"assets/assets/images/free.png": "21c028c0867459dc8eb68ec31154ea6c",
"assets/assets/images/fridge_icon.svg": "432e6d35cefabd14533d2a979d7b0bbd",
"assets/assets/images/google_icon.svg": "6459449ed44cd231d6fafcf26b82f0fc",
"assets/assets/images/google_logo.svg": "04822cc1dc627c807b34ba9723bc86fb",
"assets/assets/images/home/home_carousel_arrow_left.svg": "dfa8eccb155e6d609b53d2909450c9df",
"assets/assets/images/home/home_carousel_arrow_right.svg": "b56205a4f247a1f5788976bcf92c3066",
"assets/assets/images/home/mobile/1.png": "1cc4ed2eb0e743e21a20bf52741a88ce",
"assets/assets/images/home/mobile/10.png": "05b6392709c0596af2ffcd032440898f",
"assets/assets/images/home/mobile/11.png": "4ce7de0d47fb0c7ed0327c0f4a46c683",
"assets/assets/images/home/mobile/12.png": "7aedc794027aa3e6ee74c18e336af7cf",
"assets/assets/images/home/mobile/13.png": "87df5dc6e347905a7f95c5295376f3ea",
"assets/assets/images/home/mobile/14.png": "1f5c710f13b4d419c677f5fce13103b8",
"assets/assets/images/home/mobile/15.png": "b210e918ac45562eea786e9cdf939536",
"assets/assets/images/home/mobile/16.png": "df2f6b31bd46a624826a38eec247bede",
"assets/assets/images/home/mobile/17.png": "e9ff2901c4a1c9b3620297fa6ffdb580",
"assets/assets/images/home/mobile/18.png": "f6573a064f74a4a895c7cc80632c4261",
"assets/assets/images/home/mobile/19.png": "9eaf6cf862af39827c67db1814edc543",
"assets/assets/images/home/mobile/2.png": "d42453a501ff07820a54e492226b4060",
"assets/assets/images/home/mobile/20.png": "d2d511c7589b54eeaa7189be56cafb5c",
"assets/assets/images/home/mobile/3.png": "fc5ef53ef105c15b9e5d448d5e192851",
"assets/assets/images/home/mobile/4.png": "d872fdf73cd5f4c60067a78c800023fe",
"assets/assets/images/home/mobile/5.png": "29a0bcba25a792d47d88962855057637",
"assets/assets/images/home/mobile/6.png": "d1b348ca0532ade39d2222570ffed9d6",
"assets/assets/images/home/mobile/7.png": "9174d1f4d57200558400576f80563183",
"assets/assets/images/home/mobile/8.png": "0a13980c7240e537605dbd452c432856",
"assets/assets/images/home/mobile/9.png": "fbc17cb96ca1ad8ef9042db30cf7e4fd",
"assets/assets/images/home/web/1.png": "ec70ce5df0d59370c3271aa2c6b841e2",
"assets/assets/images/home/web/10.png": "0de1f27ac75bf4b174e217006a76d866",
"assets/assets/images/home/web/11.png": "3108f48ae0f0d1063e72e44ed1d1cbc2",
"assets/assets/images/home/web/12.png": "cbd477d6cf3213fb55b63e0ff6112fd1",
"assets/assets/images/home/web/13.png": "bc4d00b4ff4e3742709ce61986a6aa37",
"assets/assets/images/home/web/14.png": "1413dc94786332ab01d3ea875f3a6425",
"assets/assets/images/home/web/15.png": "2420ed3dc783f90f22c227ccd156adaa",
"assets/assets/images/home/web/16.png": "0128aac65e12dc7c4024236aafe652cb",
"assets/assets/images/home/web/17.png": "f6cc947b87e0df698f1425f9cf2f89ed",
"assets/assets/images/home/web/18.png": "1d6a342e6b473e0d58d0eff34e47d22e",
"assets/assets/images/home/web/19.png": "990d3bdf2a8a45cc80b00249b256a1b0",
"assets/assets/images/home/web/2.png": "5204ade0ff877fc16a5ce0f13334c2d7",
"assets/assets/images/home/web/20.png": "9625fc7b29d9e0790b97a10f4847786e",
"assets/assets/images/home/web/3.png": "fb402f1d1818c440a5bb6e36dfd39eb7",
"assets/assets/images/home/web/4.png": "0f42c1607cdf948875c676bffd96b44c",
"assets/assets/images/home/web/5.png": "c69ee6dfac4618c5b129dd29b4c4090e",
"assets/assets/images/home/web/6.png": "a1d4c563b20aa88952587f547ac79518",
"assets/assets/images/home/web/7.png": "f1e05478403af3701d7461b20de9834a",
"assets/assets/images/home/web/8.png": "30204b68e39c951327764c934f9d91d4",
"assets/assets/images/home/web/9.png": "a5e4655e36c990395fa9f87608ce430c",
"assets/assets/images/home_ic.svg": "f4bf46abd220ef1fa0cdd5d974974829",
"assets/assets/images/hotel_image.png": "2e4385a6fac5f3d124d9a242098dc064",
"assets/assets/images/hotel_image_2.png": "e30c4778ee3bd72aae6795af6c408cd0",
"assets/assets/images/hotel_image_3.png": "692a877fd40ff96f566d338c5e6dd65b",
"assets/assets/images/hotel_image_4.png": "c599b9ffeeaf511d71ab3979d2bf66aa",
"assets/assets/images/hotel_img.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/hotel_loading_1.webp": "6580fc2473b5d3b97bbe36baf76f7b98",
"assets/assets/images/hotel_loading_2.webp": "5bbec46a418a84f76892a8c983882268",
"assets/assets/images/hotel_loading_3.webp": "45df3bd2926e765affaece94cb97b942",
"assets/assets/images/hotel_loading_4.webp": "81dce04a559766a6a33e62336560dfd7",
"assets/assets/images/ic_add.png": "34c9d6126aaea4c65ff42af0998e8bf8",
"assets/assets/images/ic_back_button_with_bg.png": "a1fbfc8d38591dc08cc02635f4d70f08",
"assets/assets/images/ic_charges.png": "ae9751b14f536882a14a4b16f03965e8",
"assets/assets/images/ic_clock.png": "e6177effaa5c306403faf9b4a6ad80d2",
"assets/assets/images/ic_close.png": "72681b018bff1a6e66613e872da59bce",
"assets/assets/images/ic_cloud.svg": "e90e8d9bce7f3990d13c0f3cc6e99864",
"assets/assets/images/ic_delete.png": "1e477ece28f1563765ff282348249d4b",
"assets/assets/images/ic_driving.png": "3eb68bba10e34737ab69c4b9c103500f",
"assets/assets/images/ic_drop.svg": "9be03a3e33e134edae85adf073d9fcd9",
"assets/assets/images/ic_flight.png": "c2eca05bb4c1f69160ff27a8d8eb60f5",
"assets/assets/images/ic_map_marker.png": "6a488dd347d68f9da0616fd4607cfd0d",
"assets/assets/images/ic_star.png": "65a62073788579d3152694588ff5c780",
"assets/assets/images/ic_ticket.png": "c228e23d555fdb9c851c2558bf8a854b",
"assets/assets/images/ic_ticket_small.png": "7b3afa5fbccb7a24c525a4d565c4580d",
"assets/assets/images/ic_transit.png": "9bb761f2fa016e5e56fb610ef8649f3a",
"assets/assets/images/ic_two_wheelers.png": "5ac1aaa03debe6354bacd62d30c482bd",
"assets/assets/images/ic_walking.png": "5963bd98e597fcb1e72faadd901f8377",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/images/img_attraction.png": "e13f51125c429d5de910301546e15846",
"assets/assets/images/img_event.jpg": "668dc777de2dce22737227249c613651",
"assets/assets/images/img_event.png": "b12f36244edaee8acd0592cc6d1f8152",
"assets/assets/images/img_flight.jpg": "b9c833608af368997cc66669ebac3b9b",
"assets/assets/images/img_itinerary_hotel.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/img_itinerary_place.png": "0299d15f56efc5943aac365974e79bcc",
"assets/assets/images/img_itinerary_restaurants.png": "f28605351282682d6bbbccf229bd5fde",
"assets/assets/images/img_qr.png": "33d0b886c9d9e8fc181bb0ccc01f6a5c",
"assets/assets/images/img_restaurant.png": "3843610f19fcd2202a275bde857def4b",
"assets/assets/images/itinerary_loading_1.webp": "8145df82f00dc7845bdff62dfdca74db",
"assets/assets/images/itinerary_loading_2.webp": "83cde70063e71e6bc31fabe4cf3ed986",
"assets/assets/images/itinerary_loading_3.webp": "18fdec00d2029a8d366f686628a3a53f",
"assets/assets/images/itinerary_loading_4.webp": "cdd5d74dfba239391d763285dd69bb38",
"assets/assets/images/kids_icon.svg": "019bc522fe1cf64a6aeb4bf19cff6924",
"assets/assets/images/landing_flight.svg": "4e2c6ba40945965da5d9064503ea6511",
"assets/assets/images/launcher.png": "c32fa032b56fca83a5de2bee7a7452bd",
"assets/assets/images/line.png": "bbb3486ce39d2cbe5646c5ff7226c3b5",
"assets/assets/images/location.svg": "2981773acff9f7c33188976fbc7c419e",
"assets/assets/images/location_arrow.svg": "187c476a1e194d34fc71f32c63e4c399",
"assets/assets/images/location_hollow.svg": "249da766c8984213dc94a01cb128dfca",
"assets/assets/images/location_ic.png": "7ce906f3e2130fc12de4f6520ce3edae",
"assets/assets/images/login_landing_bg.png": "b61873b084357cc2014ee11e89dcde65",
"assets/assets/images/login_loader_image.svg": "84297328d89e3ca66e9898dd8e8dd5de",
"assets/assets/images/login_web.png": "99ef54aa4b405e9ebf5f022b9843afbd",
"assets/assets/images/logo.svg": "e047af7cbe650fd5c907f6c909faa1f7",
"assets/assets/images/logo_ic.svg": "178a6dd894fa8077cb207d2532b03f1b",
"assets/assets/images/male_icon.svg": "85ec205d3900bec5b3690171e70f029f",
"assets/assets/images/map.png": "826ff234736fd33cefc4003b096d3569",
"assets/assets/images/map_mobile.png": "8ed4566a50236c76f5a63e41728036ac",
"assets/assets/images/map_user_arrow.png": "44ef36b8adc06607eeaa73d05cb35a12",
"assets/assets/images/map_user_car_icon.png": "a836a29b31a2faa578429b1e9632fca4",
"assets/assets/images/marker-bg.png": "fa297c125259158622d9b9b8ccf7a532",
"assets/assets/images/mask_blur.png": "075db16f16e590d1028b8de5e35f4282",
"assets/assets/images/mic_background_complex.svg": "d9019faa3566c6377ebc126f9aeed634",
"assets/assets/images/mic_black_ic.svg": "0965a1409cfc6f44386c33267fefbad8",
"assets/assets/images/mic_icon_complex.svg": "e9f566fe73ba14c2a917b22342dc8d00",
"assets/assets/images/mini-arrow-right.png": "591a4f90826751e2763785277b074801",
"assets/assets/images/multitask.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/multitask.svg": "fabb042b949ee75a4e1690ce71ccd294",
"assets/assets/images/new_chat_old.svg": "eff62842226d0164287646c8feaa4d98",
"assets/assets/images/next.png": "acd9985488dfdc4293a1ae8611c570e7",
"assets/assets/images/person.svg": "86b07cf9f6331a7fbd9db9f313707fdd",
"assets/assets/images/previous.png": "138f33413ea904443471b76fb92283b5",
"assets/assets/images/profile_tick.svg": "28d8dc3a5f4de049816fe85e3bcf095a",
"assets/assets/images/receipt_icon.svg": "0bb1cfcc4ac843385533afd96a97dc5d",
"assets/assets/images/restaurant_loading_1.webp": "014c63c32ccfeb117b0b8b88455453b1",
"assets/assets/images/restaurant_loading_2.webp": "7a912c9e012602fe2f3c4de79244dd85",
"assets/assets/images/restaurant_loading_3.webp": "55bf85718064155d6b0d229548a6ac6d",
"assets/assets/images/restaurant_loading_4.webp": "ba1795c8fc74fb29d3c4f2a50c9d4a85",
"assets/assets/images/rest_detail_image_1.png": "ec7d3b7844c69b85439e3c7850686d14",
"assets/assets/images/rest_detail_image_2.png": "286b0e4b4cff077567bb0d1c09829d60",
"assets/assets/images/rest_detail_image_3.png": "e4f455762acb7db2297e94c66fb09f16",
"assets/assets/images/review_avatar.png": "e9662f8a86efe68628caf910100bb9dc",
"assets/assets/images/romantic_dinner.png": "a6ea20b963b6f670bf75dc17c0a18896",
"assets/assets/images/romantic_img_1.png": "52295981e0bded76c87f309d9ad726f1",
"assets/assets/images/romantic_img_2.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/romantic_img_3.png": "e734a5f49c3e300f3ca6517a14764ecb",
"assets/assets/images/romantic_img_4.png": "c09fd1b7a85a871f24c42d9c2fb9a80c",
"assets/assets/images/romantic_img_5.png": "719fae6070d8db5d9e6719aabda6c4a9",
"assets/assets/images/romantic_img_6.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/romantic_img_7.png": "43249b0fa0f0871757738cbc9d75a91d",
"assets/assets/images/room_image.png": "4affd2de0732ab33c5e6fb55313f0ade",
"assets/assets/images/sas_image.png": "15b4d47f5d1d0641488f0a2743b62fb6",
"assets/assets/images/share.svg": "c3578734f5998ed8022c41474316f351",
"assets/assets/images/sidebar-simple-left-wide.svg": "d5121333bdcafb8c94e4b91d3870276c",
"assets/assets/images/stack_image_1.png": "f2cf5e07db5327d56c8fd5f04ed59e5b",
"assets/assets/images/stack_image_2.png": "6281273be2bb2a862c3fe3c1a43ab197",
"assets/assets/images/stack_image_3.png": "bdc7c7567f7f6b362b6f6d0ec01bdc8c",
"assets/assets/images/stack_image_4.png": "1a442803e4e32dfa27df260e1b885d0b",
"assets/assets/images/stack_image_5.png": "ff5cff200f9b34fe7ed9a7036f9ac08d",
"assets/assets/images/stack_image_6.png": "21743a88fe2fad9d7b5e84666e82d03e",
"assets/assets/images/star.png": "4b7c888d7378a5939b6766fcbfecaee3",
"assets/assets/images/text_icon.svg": "c3430aac6181ef5e222b683638079149",
"assets/assets/images/thumb_up_icon.svg": "93fba25a09b8b91389f60694d2d3990c",
"assets/assets/images/train.png": "75f55ffd0b396b11d3ead6b56e4bbefb",
"assets/assets/images/transport_loading_1.png": "527c009bc390376d9b856044356f8693",
"assets/assets/images/transport_loading_2.png": "ab9a058499b0940303f5c8c803873daa",
"assets/assets/images/transport_loading_3.png": "aa0f627e9e8020c8a9892d5983af546c",
"assets/assets/images/transport_loading_4.png": "1e7c04b745f8d0b0f025e17806011938",
"assets/assets/images/trip_img.png": "593b317bef418c7207ac47a6bc40e38c",
"assets/assets/images/tv_icon.svg": "fb3f4c95db2ad852062109734e4ce310",
"assets/assets/images/uber.png": "249842d9b6605fde08eb6dc601b0fd04",
"assets/assets/images/vacation_1.png": "a58bcb785319399576436d40befd4881",
"assets/assets/images/vacation_2.png": "c6182d583b28635f6605a27ab0693876",
"assets/assets/images/vacation_3.png": "df1e3d94b4559db198b2841ffe8a7966",
"assets/assets/images/video_field_image.png": "d249d3129ebd2071796d46c654993c39",
"assets/assets/images/voice_icon.png": "f15237bbce56d79a6e27bcf6d2d9afe2",
"assets/assets/images/voice_icon.svg": "35a9051d7571b4facc0db41ea325375c",
"assets/assets/images/volume_off_icon.svg": "38f982dbf4574700123846259b6fcdea",
"assets/assets/images/weather-cloudy.png": "103672a6ff40ccb1f4669966f57a9fb2",
"assets/assets/images/weather-rainy.png": "9d3a4e50654640304ecff18c4594cd95",
"assets/assets/images/weather-sun.png": "a9a6cb86a6191c3333190c7f859ecee1",
"assets/assets/images/weather-windy.png": "900a59e3c096cffd84a0fb0ef56ce2ba",
"assets/assets/images/weather_cloudy.png": "1333f89656804cf874eec449618b0ecc",
"assets/assets/images/weather_partly_cloudy.png": "acdab59d4d1009418ee9e5e8326ca724",
"assets/assets/images/weather_rainy.png": "c1b8392aa941d20676b462da80e935e4",
"assets/assets/images/weather_snowy.png": "e95c1f88ad055a4df7aee21645946211",
"assets/assets/images/weather_sunny.png": "efc062882d44b0775e78b47722fe43ac",
"assets/assets/images/weather_thunder.png": "7fd0a94f8fbbd2a4b2347403a9c4caed",
"assets/assets/images/web_ic.png": "bc7977cb93bd093248495a3efc1f8e25",
"assets/assets/images/web_search_close_icon.svg": "daaeea0f631d3ab412c6e34ef81adf2a",
"assets/assets/images/white_transparent_line.png": "b992a88e2e3597f00e52b4ae7aa2c950",
"assets/assets/images/wifi_icon.svg": "6264ca701463e5ff4f05c5cf98e89f2a",
"assets/assets/json/itinerary.json": "4cde9af2e9288abde41926367df1485e",
"assets/assets/json/loop_particles.json": "fc5373b4071f161845f73cc82515fae0",
"assets/assets/map_style.json": "c12f1e334f30367b495b93030e9bca6d",
"assets/assets/sounds/calling_processing.mp3": "f535b3daaa0753a8fd9b89dadf9f9a21",
"assets/assets/sounds/connected.mp3": "b6718139e9bb2c90d0a5a6b210d0c06c",
"assets/assets/vad/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/assets/vad/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/assets/vad/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/assets/vad/ort.js": "dd86ffc8dcdd78c5b2d653478ea50b8f",
"assets/assets/vad/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/assets/vad/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/assets/vad/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/assets/vad/vad_web.js": "f7368c952f4581cd4858da6fd9b3188a",
"assets/FontManifest.json": "367f1a72552ca623d6ed0e512d87a562",
"assets/fonts/MaterialIcons-Regular.otf": "6ac14d3a21284ac2ea9fba31db7f398c",
"assets/NOTICES": "d054ec1e0bd12c58e428066571656fff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "507ad209b8d95af3fa8f8972acacea3b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/vad/assets/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/packages/vad/assets/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/packages/vad/assets/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/packages/vad/assets/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/packages/vad/assets/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/packages/vad/assets/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/packages/vad/assets/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/packages/vad/assets/vad_web.js": "f6235790d5907304149d7e34ddb8b712",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "9ec3cdc0277dd02c19db0fcc625a2e6a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "223239f04e335e847d2f982f37d55a5e",
"icons/Icon-192.png": "f227577269e6a65b6b0f2c30f07f2f48",
"icons/Icon-512.png": "1edffbc397bf901019b217f499d85c3d",
"icons/Icon-maskable-192.png": "f227577269e6a65b6b0f2c30f07f2f48",
"icons/Icon-maskable-512.png": "1edffbc397bf901019b217f499d85c3d",
"index.html": "116a0a0aa35eb43144c30c29206cac33",
"/": "116a0a0aa35eb43144c30c29206cac33",
"main.dart.js": "a6b0eab011734320c97fca9a52c05fc1",
"manifest.json": "b06964d27bf7c348234863c6bbd16c42",
"version.json": "bc24f47e5969f6d40fb32b1831d485ba"};
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
