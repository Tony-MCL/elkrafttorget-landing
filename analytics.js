// Kun statistikk for den midlertidige landingssiden.
// Bruker samme Firestore-prosjekt og tellemodell som MCL Analytics.
// Ingen personopplysninger, informasjonskapsler eller bruker-ID lagres her.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  doc,
  getFirestore,
  runTransaction,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBA9QCYJQ6cGvUgMb2MSYJoSEEID35_Yb0",
  authDomain: "mcl-website-8fcca.firebaseapp.com",
  projectId: "mcl-website-8fcca",
  storageBucket: "mcl-website-8fcca.firebasestorage.app",
  messagingSenderId: "277959935321",
  appId: "1:277959935321:web:975bb2c236a72f8598f848",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pageRef = doc(db, "siteAnalytics", "elkrafttorget-landing");
const emptyCounters = () => ({ views: 0, googlePlay: 0, appStore: 0 });

async function registerLandingView() {
  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(pageRef);
    const existing = snapshot.data();
    const total = { ...emptyCounters(), ...(existing?.total ?? {}) };
    const period = { ...emptyCounters(), ...(existing?.period ?? {}) };

    total.views += 1;
    period.views += 1;

    if (snapshot.exists()) {
      transaction.update(pageRef, { total, period, lastEventAt: serverTimestamp() });
    } else {
      transaction.set(pageRef, {
        total,
        period,
        lastEventAt: serverTimestamp(),
        resetAt: serverTimestamp(),
      });
    }
  });
}

// Statistikken er uavhengig av nedtelling og øvrig innhold på siden.
registerLandingView().catch((error) => {
  console.warn("Kunne ikke registrere sidevisning:", error);
});
