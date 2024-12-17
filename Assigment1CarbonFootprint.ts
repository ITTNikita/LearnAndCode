
type EmailEntity = {
    entityType: string;
    email: string;
    source: string;
    inboxEmails: number;  
    sendEmails: number;   
    spamEmails: number;   
}


const entities: EmailEntity[] = [
    {
        entityType: "email",
        email: "jack@gmail.com",
        source: 'outlook',
        inboxEmails: 8,
        sendEmails: 4,
        spamEmails: 1.5
    },
    {
        entityType: 'email',
        email: 'jenny@yahoo.com',
        source: 'outlook',
        inboxEmails: 10,
        sendEmails: 2,
        spamEmails: 5
    }
];

function getCarbonFootprintForEmail(entity: EmailEntity) {
    let inboxCarbonFootprint = entity.inboxEmails * 0.004;   // 0.004 KG CO2 per GB in inbox
    let spamCarbonFootprint = entity.spamEmails * 0.0003;     // 0.0003 KG CO2 per GB of spam emails
    let sendCarbonFootprint = entity.sendEmails * 0.05;       // 0.05 KG CO2 per sent email with attachment

    let totalCarbonFootprint = inboxCarbonFootprint + spamCarbonFootprint + sendCarbonFootprint;

    
    return {
        emailId: entity.email,
        source: entity.source,
        inbox: `${inboxCarbonFootprint.toFixed(4)} KG CO2`,
        send: `${sendCarbonFootprint.toFixed(4)} KG CO2`,
        spam: `${spamCarbonFootprint.toFixed(4)} KG CO2`,
        total: `${totalCarbonFootprint.toFixed(4)} KG CO2`
    }
}


function getCarbonFootPrintForServer(entity: EmailEntity) {
    console.log("Server carbon footprint calculation is not implemented yet.");
}


function getCarbonFootprint(entityType: string, entity: EmailEntity) {
    if (entityType === 'email') {
        return getCarbonFootprintForEmail(entity);
    } else if (entityType === 'server') {
        getCarbonFootPrintForServer(entity);
    } else {
        return "No data is present for this entity type.";
    }
}

//to loop at everyObject from array 
entities.forEach(entity => {
    const result = getCarbonFootprint(entity.entityType, entity);
    console.log(result);
});
