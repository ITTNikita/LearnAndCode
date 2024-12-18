
type EmailEntity = {
    entityType: string;
    email: string;
    source: string;
    inboxEmails: number;  
    sentEmails: number;   
    spamEmails: number;   
}


enum CarbonEmissionFactors {
  Inbox = 0.004,   // 0.004 KG CO2 per GB in inbox
  Spam = 0.0003,   // 0.0003 KG CO2 per GB of spam emails
  Sent = 0.05,     // 0.05 KG CO2 per GB in sent emails
}

const entities: EmailEntity[] = [
    {
        entityType: "email",
        email: "jack@gmail.com",
        source: 'outlook',
        inboxEmails: 8,
        sentEmails: 4,
        spamEmails: 1.5
    },
    {
        entityType: 'email',
        email: 'jenny@yahoo.com',
        source: 'outlook',
        inboxEmails: 10,
        sentEmails: 2,
        spamEmails: 5
    }
];

function getCarbonFootprintForEmail(entity: EmailEntity) {
    let inboxCarbonFootprint = entity.inboxEmails * CarbonEmissionFactors.Inbox;  
    let spamCarbonFootprint = entity.spamEmails * CarbonEmissionFactors.Spam;     
    let sentCarbonFootprint = entity.sentEmails * CarbonEmissionFactors.Sent;

    let totalCarbonFootprint = inboxCarbonFootprint + spamCarbonFootprint + sentCarbonFootprint;

    
    return {
        emailId: entity.email,
        source: entity.source,
        inbox: `${inboxCarbonFootprint} KG CO2`,
        sent: `${sentCarbonFootprint} KG CO2`,
        spam: `${spamCarbonFootprint} KG CO2`,
        total: `${totalCarbonFootprint} KG CO2`
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
