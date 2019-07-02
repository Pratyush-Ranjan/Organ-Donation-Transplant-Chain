pragma solidity >=0.4.22 <0.6.0;

contract OrganChain {
    
    //structures
    struct recipient{
        address patientid;
        address hospitalid;
        string ipfshash;
        string EMRhash;
        uint priority;
        bytes32 organ;
        bytes32 bloodgroup;
        bytes32 rhfactor;
        bool matchfound;
        bool exist;
    }
    
    struct donor{
        address donorid;
        string ipfshash;
        string EMRhash;
        bytes32 organ;
        bytes32 bloodgroup;
        bytes32 rhfactor;
        bool matchfound;
        bool exist;
    }
    
    struct transplant{
        address recipient;
        address donor;
        bool exist;
    }
    
    //global variables
    address[] recipientarr;
    address[] donorarr;
    address[] transplantarr;
    
    //Mappings
    mapping(address => recipient) Recipients;
    mapping(address => donor) Donors;
    mapping(address => transplant) Transplants;
    mapping(address => address[]) hospital_recipient;
    
    //modifier
    
    modifier checkrecipientexist(address addr){
        require(!Recipients[addr].exist,"recipient already added");
        _;
    }
    
     modifier checkdonorexist(address addr){
        require(!Donors[addr].exist,"recipient already added");
        _;
    }
    
    //donor functions
    
    function adddonor(
        address donori,
        string memory hash,
        string memory hash2,
        bytes32 organ_name,
        bytes32 bgroup,
        bytes32 factor) public checkdonorexist(donori){
            Donors[donori]=donor(donori,hash,hash2,organ_name,bgroup,factor,false,true);
            donorarr.push(donori);
        }
        
    function getdonor(address donoradd) public view
    returns (address,
    string memory,
    bytes32,
    bytes32,
    bytes32){
        if(!Donors[donoradd].matchfound)
        return(
            Donors[donoradd].donorid,
            Donors[donoradd].ipfshash,
            Donors[donoradd].organ,
            Donors[donoradd].bloodgroup,
            Donors[donoradd].rhfactor);
        else
        getdonorwithtransplant(donoradd);
    }
    
    function getdonorwithtransplant(address donoradd) public view
    returns (address,
    string memory,
    bytes32,
    bytes32,
    bytes32,
    address) {
        for(uint i=0;i<transplantarr.length;i++)
        {
            if(donoradd==Transplants[transplantarr[i]].donor)
            return(Donors[donoradd].donorid,
            Donors[donoradd].ipfshash,
            Donors[donoradd].organ,
            Donors[donoradd].bloodgroup,
            Donors[donoradd].rhfactor,
            Transplants[transplantarr[i]].recipient);
        }
    }
    
    //recipient functions
    
    function addrecipient(
        address hospi,
        address patient,
        string memory hash,
        string memory hash2,
        uint _priority,
        bytes32 organ_name,
        bytes32 bgroup,
        bytes32 factor) public checkrecipientexist(patient){
            Recipients[patient]=recipient(patient,hospi,hash,hash2,_priority,organ_name,bgroup,factor,false,true);
            recipientarr.push(patient);
            hospital_recipient[hospi].push(patient);
    }
        
    function getrecipient(address reciadd) public view
    returns(address,
    address,
    string memory,
    bytes32,
    bytes32,
    bytes32){
        return(
            Recipients[reciadd].patientid,
            Recipients[reciadd].hospitalid,
            Recipients[reciadd].ipfshash,
            Recipients[reciadd].organ,
            Recipients[reciadd].bloodgroup,
            Recipients[reciadd].rhfactor);
    }
    
    function getrecipientcount(address hospiadd) public view returns(uint256)
    {
        return(hospital_recipient[hospiadd].length);
    }
    
    function getrecipientdetail(address hospiaddr, uint256 m) public view 
    returns(address,
        string memory,
        uint,
        bytes32,
        bytes32
        ){  
                if(!Recipients[hospital_recipient[hospiaddr][m]].matchfound)
                {   
                   return(
                       Recipients[hospital_recipient[hospiaddr][m]].patientid,
                       Recipients[hospital_recipient[hospiaddr][m]].ipfshash,
                       Recipients[hospital_recipient[hospiaddr][m]].priority,
                       Recipients[hospital_recipient[hospiaddr][m]].organ,
                       Recipients[hospital_recipient[hospiaddr][m]].bloodgroup);
                }
    }
    
    //transplant matching
    
    function transplantmatch(address recipientad) public
    returns(address) {
        for(uint i=0;i<donorarr.length;i++)
        {
            if( (Recipients[recipientad].organ==Donors[donorarr[i]].organ) 
            && (Recipients[recipientad].bloodgroup==Donors[donorarr[i]].bloodgroup)
            && (Recipients[recipientad].rhfactor==Donors[donorarr[i]].rhfactor) )
            {   Transplants[recipientad]=transplant(recipientad,donorarr[i],true);
                transplantarr.push(recipientad);
                Recipients[recipientad].matchfound=true;
                Donors[donorarr[i]].matchfound=true;
                return (donorarr[i]);
            }
        }
    }
    
    //patient record
    
    function EMR(address patientaddr) public view
    returns (string memory) {
        for(uint i=0;i<donorarr.length;i++)
        {
            if(patientaddr==donorarr[i])
            return(Donors[donorarr[i]].EMRhash);
        }
        for(uint j=0;j<recipientarr.length;j++)
        {
            if(patientaddr==recipientarr[j])
            return(Recipients[recipientarr[j]].EMRhash);
        }
    }
     
}
