var Hospi= require('../models/hospitals');
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/OrganChain');

var hospitals= [new Hospi({
	username: 'ACE HOSPITAL',
	password: '',
	hospitalpublickey: '',
	address: 'Survey No. 32/2A, Pune, Maharashtra',
	contact: '20-25434063',
	city: 'Pune'
}),
new Hospi({
	username: 'AIIMS Delhi',
	password: '',
	hospitalpublickey: '',
	address: 'Aurobindo Marg, New Delhi',
	contact: '011-26588500',
	city: 'New Delhi'
}),
new Hospi({
	username: 'Fortis Hospital',
	password: '',
	hospitalpublickey: '',
	address: 'Sector B-1, vasant kunj, New Delhi',
	contact: '011-42776222',
	city: 'New Delhi'
}),
new Hospi({
	username: 'GB Pant Hospital',
	password: '',
	hospitalpublickey: '',
	address: '1, Jawahar Lal Nehru Marg, New Delhi',
	contact: '011-23234242',
	city: 'New Delhi'
}),
new Hospi({
	username: 'Birla Hospital',
	password: '',
	hospitalpublickey: '',
	address: 'Surya Mandir Road, Near Sun Temple, Opposite Mahaveer Residency, Gwalior, Madhya Pradesh',
	contact: '0751-2405659',
	city: 'Gwalior'
}),
new Hospi({
	username: 'Apollo Hospital',
	password: '',
	hospitalpublickey: '',
	address: '18, Kila Gate Road, Vikas Nagar, Near Sai Baba Mandir, Gwalior, Madhya Pradesh',
	contact: '0751-2454600',
	city: 'Gwalior'
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