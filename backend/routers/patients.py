from fastapi import APIRouter, Depends
from sqlmodel import Session, select

from database import get_db
from exceptions import PatientNotFound
from models import Patient
from schemas import PatientUpdateRequest

router = APIRouter()


@router.get("/patients")
async def get_patients(session: Session = Depends(get_db)) -> list[Patient]:
    return session.exec(select(Patient)).all()


@router.get("/patients/{patient_id}")
async def get_patient(patient_id: int, session: Session = Depends(get_db)) -> Patient:
    return session.get(Patient, patient_id)


@router.post("/patients")
async def create_patient(patient: Patient, session: Session = Depends(get_db)):
    session.add(patient)
    session.commit()
    session.refresh(patient)
    return patient


@router.patch("/patients/{patient_id}")
async def update_patient(patient_id: int, patient_update: PatientUpdateRequest, session: Session = Depends(get_db)):
    """ Update specific fields of a patient, but the patient needs to exist. All fields are optional. """
    patient = session.get(Patient, patient_id)
    if patient is None:
        raise PatientNotFound(id=patient_id)

    for attr, value in patient_update.model_dump(exclude_unset=True).items():
        setattr(patient, attr, value)

    session.add(patient)
    session.commit()
    session.refresh(patient)
    return patient


@router.delete("/patients/{patient_id}")
async def delete_patient(patient_id: int, session: Session = Depends(get_db)):
    patient = session.get(Patient, patient_id)
    if patient is None:
        raise PatientNotFound(id=patient_id)
    session.delete(patient)
    session.commit()
