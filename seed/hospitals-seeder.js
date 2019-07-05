var Hospi= require('../models/hospitals');
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/OrganChain');

var hospitals= [new Hospi({
	username: 'Ace Hospital',
	password: '$2a$08$2hxBGTstxiH7iiioGQwAfO.Wa1PFPUUmjeAh9ncHDT07jU6j7/Iwe',
	hospitalpublickey: '0x68099feE8C881F514dfd6A38fe4F72B9CA5F52e3',
	address: 'Survey No. 32/2A, Pune, Maharashtra',
	contact: '020-25434063',
	city: 'Pune',
	imgurl: './public/images/ace.jpg'
}),
new Hospi({
	username: 'AIIMS Delhi',
	password: '$2a$08$2VhUbHgctr6v93nQbp5OtuEKlbDZZNbCIagabH1pP5B959rNJ8AsO',
	hospitalpublickey: '0x3B38705F2f0839EcfEe2622b867073e6146fEacd',
	address: 'Aurobindo Marg, New Delhi',
	contact: '011-26588500',
	city: 'New Delhi',
	imgurl: './public/images/aiims.jpg'
}),
new Hospi({
	username: 'Fortis Hospital',
	password: '$2a$08$t.mgJN5UBYuUD.pCOchwSerauL6jv1cLtQkzdDYiTAriZ4aYpbAYS',
	hospitalpublickey: '0xEe24e5C62A83c96B1De4b041Bd0b870E6202B5A6',
	address: 'Sector B-1, vasant kunj, New Delhi',
	contact: '011-42776222',
	city: 'New Delhi',
	imgurl: './public/images/fortis.jpg'
}),
new Hospi({
	username: 'GB Pant Hospital',
	password: '$2a$08$PEyruHWbJaXKeSmUdmv2qeNoJ728AllU6Cmyk1LvXV8ws8FPdfG72',
	hospitalpublickey: '0x3CA1077784c6e3fddBFbF7C05a102D80d462e6F9',
	address: '1, Jawahar Lal Nehru Marg, New Delhi',
	contact: '011-23234242',
	city: 'New Delhi',
	imgurl: './public/images/gbpant.jpg'
}),
new Hospi({
	username: 'Birla Hospital',
	password: '$2a$08$7cQbB5T4xx3Cq9ex1G/uHurN/gBhSFTPsGEF0onkLOQ5FTIdf8Q3u',
	hospitalpublickey: '0x7DeC649AAe2aEFce55Bb4743D9Da4b7D1Bb89dAf',
	address: 'Surya Mandir Road, Near Sun Temple, Opposite Mahaveer Residency, Gwalior, Madhya Pradesh',
	contact: '0751-2405659',
	city: 'Gwalior',
	imgurl: './public/images/birla.jpg'
}),
new Hospi({
	username: 'Apollo Hospital',
	password: '$2a$08$Fmn3qHYr7d/5y2ao3cL5duX3cF7/T9Or7ZlXsuDpYaZv.AUuRBYqO',
	hospitalpublickey: '0x939f865B678AbFa04FD49AA0aEe45B84deBDDA57',
	address: '18, Kila Gate Road, Vikas Nagar, Near Sai Baba Mandir, Gwalior, Madhya Pradesh',
	contact: '0751-2454600',
	city: 'Gwalior',
	imgurl: './public/images/apollo.jpg'
}),
new Hospi({
	username: 'Sahara Hospital',
	password: '$2a$08$mc7IjP6kjGsaB0QHbCtgvecsA1IpGYAGJAJY2k.XsIJtcPpXoQ/i.',
	hospitalpublickey: '0x171A1857D52918FC6d865b0A8c001328d142EF98',
	address: '19 A, Vijay Nagar Extension, Basant Vihar Colony, Lashkar, Gwalior, Madhya Pradesh',
	contact: '09926800870',
	city: 'Gwalior',
	imgurl: './public/images/sahara.jpg'
}),
new Hospi({
	username: 'Columbia Asia Hospital',
	password: '$2a$08$eCXfnxFoqWmk8crOMa4NCOIVR2NJO1zP17Ybb7UYHWxu07u0fXxJ6',
	hospitalpublickey: '0x3008FBe1fCeEF575BB6E1CC6724E1D86441DC338',
	address: '22, 2A, Mundhwa - Kharadi Rd, Near Nyati Empire, Santipur, Thite Nagar, Kharadi, Pune, Maharashtra',
	contact: '020-71290222',
	city: 'Pune',
	imgurl: './public/images/columbia.jpg'
})];
var done=0;
for(var i=0;i<hospitals.length;i++)
{
	hospitals[i].save(function(err,result){
		done++;
		if(done=== hospitals.length)
			exit();
	});
}
function exit(){
	mongoose.disconnect();
}
