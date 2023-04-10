import React from 'react'
import FeaturedMoleculeCard from './FeaturedMoleculeCard'

function FeaturedMoleculeCardGrid() {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <FeaturedMoleculeCard name="Water" color="blue" formula="H2O"/>
            <FeaturedMoleculeCard name="Carbon dioxide" color="orange" formula="CO2"/>
            <FeaturedMoleculeCard name="Methane" color="amber" formula="CH4"/>
            <FeaturedMoleculeCard name="Caffeine" color="stone" formula="C8H10N4O2"/>
            <FeaturedMoleculeCard name="Ethanol" color="green" formula="C2H6O"/>
            <FeaturedMoleculeCard name="Capsaicin" color="red" formula="C18H27NO3"/>
            <FeaturedMoleculeCard name="Dopamine" color="emerald" formula="C8H11NO2"/>
            <FeaturedMoleculeCard name="Serotonin" color="yellow" formula="C10H12N2O"/>
            <FeaturedMoleculeCard name="Oxytocin" color="pink" formula="C43H66N12O12S2"/>
            <FeaturedMoleculeCard name="Testosterone" color="indigo" formula="C19H28O2"/>
            <FeaturedMoleculeCard name="Estradiol" color="rose" formula="C19H28O2"/>
            <FeaturedMoleculeCard name="Melatonin" color="violet" formula="C13H16N2O2"/>
            <FeaturedMoleculeCard name="Vitamin C" color="orange" formula="C6H8O6"/>


        </div>
    );
}

export default FeaturedMoleculeCardGrid