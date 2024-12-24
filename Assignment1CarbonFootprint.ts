type EmailEntity = {
    entityType: string;
    email: string;
    source: string;
    inboxEmails: number;
    sentEmails: number;
    spamEmails: number;
};

enum CarbonEmissionFactors {
    Inbox = 0.004,   
    Spam = 0.0003,   
    Sent = 0.05,     
}

const calculateCarbonFootprint = (emails: number, factor: number) => emails * factor;

function getCarbonFootprintForEmail(entity: EmailEntity) {
    const { inboxEmails, sentEmails, spamEmails, email, source } = entity;

    const inboxCarbonFootprint = calculateCarbonFootprint(inboxEmails, CarbonEmissionFactors.Inbox);
    const spamCarbonFootprint = calculateCarbonFootprint(spamEmails, CarbonEmissionFactors.Spam);
    const sentCarbonFootprint = calculateCarbonFootprint(sentEmails, CarbonEmissionFactors.Sent);

    const totalCarbonFootprint = inboxCarbonFootprint + spamCarbonFootprint + sentCarbonFootprint;

    return {
        emailId: email,
        source,
        inbox: `${inboxCarbonFootprint.toFixed(4)} KG CO2`,
        sent: `${sentCarbonFootprint.toFixed(4)} KG CO2`,
        spam: `${spamCarbonFootprint.toFixed(4)} KG CO2`,
        total: `${totalCarbonFootprint.toFixed(4)} KG CO2`
    };
}



function getCarbonFootprint(entityType: string, entity: EmailEntity) {
    if (entityType === 'email') {
        return getCarbonFootprintForEmail(entity);
    }

    else if (entityType === 'server') {
        return {message:"server entity type"};
    }
    else

    return { message: "No data is present for this entity type." };
}


let entities: EmailEntity[] = [
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


entities.forEach(entity => {
    const result = getCarbonFootprint(entity.entityType, entity);
    console.log(result);
});
