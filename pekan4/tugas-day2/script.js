console.log("=== Soal Nomor 1 ===");
const logs = [
  "LOGIN|andi|2026-06-01",
  "LOGIN|budi|2026-06-02",
  "LOGOUT|andi|2026-06-03",
  "LOGIN|nopal|2021-06-04",
  null,
  undefined,
  "INVALID",
];

function processLogs(data) {
  const validLogs = data.filter(
    (log) => typeof log === "string" && log.includes("|"),
  );

  const parsedLogs = validLogs
    .map((log) => {
      const [action, user, date] = log.split("|");
      return { action, user, date: new Date(date) };
    })
    .filter((log) => !isNaN(log.date)); // Pastikan tanggal valid

  const report = parsedLogs.reduce(
    (acc, curr) => {
      if (curr.action === "LOGIN") {
        acc.loginCount[curr.user] = (acc.loginCount[curr.user] || 0) + 1;
      }

      if (!acc.uniqueUsers.includes(curr.user)) {
        acc.uniqueUsers.push(curr.user);
      }

      if (!acc.oldestLog || curr.date < acc.oldestLog)
        acc.oldestLog = curr.date;
      if (!acc.newestLog || curr.date > acc.newestLog)
        acc.newestLog = curr.date;

      return acc;
    },
    {
      totalValidLogs: parsedLogs.length,
      uniqueUsers: [],
      loginCount: {},
      oldestLog: null,
      newestLog: null,
    },
  );

  return report;
}

console.log(processLogs(logs));

console.log("=== Soal Nomor 2 ===");
function createWallet(initialBalance) {
  let balance = initialBalance;
  const historyLog = [`Initial balance: ${initialBalance}`];

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        historyLog.push(`Deposited: ${amount}`);
      }
    },

    withdraw(amount) {
      if (amount > balance) {
        console.error("Gagal: Saldo tidak mencukupi.");
        return;
      }
      balance -= amount;
      historyLog.push(`Withdrew: ${amount}`);
    },

    balance() {
      return balance;
    },

    history() {
      return [...historyLog];
    },
  };
}

// Penggunaan:
const wallet = createWallet(10000);
wallet.deposit(5000);
wallet.withdraw(2000);

console.log("Saldo saat ini:", wallet.balance());
console.log("Riwayat:", wallet.history());

console.log("=== Soal Nomor 3 ===");
function generatePayroll(...employees) {
  const processedEmployees = employees.map(
    ({ name, basicSalary, allowance }) => {
      const salary = Number(basicSalary) + Number(allowance);
      return { name, totalSalary: salary };
    },
  );

  const totalCompanyExpense = processedEmployees.reduce(
    (sum, emp) => sum + emp.totalSalary,
    0,
  );

  const highest = [...processedEmployees].sort(
    (a, b) => b.totalSalary - a.totalSalary,
  )[0];
  const lowest = [...processedEmployees].sort(
    (a, b) => a.totalSalary - b.totalSalary,
  )[0];

  return {
    payrollList: [...processedEmployees],
    totalCompanyExpense,
    highestPaid: { ...highest },
    lowestPaid: { ...lowest },
  };
}

const report = generatePayroll(
  { name: "Andi", basicSalary: "5000000", allowance: "1000000" },
  { name: "Andi", basicSalary: "5000000", allowance: "1000000" },
  { name: "Andi", basicSalary: "5000000", allowance: "1000000" },
  { name: "Budi", basicSalary: "4500000", allowance: "750000" },
);

console.log(report);

console.log("=== Soal Nomor 4 ===");
function inspectCollection(data) {
  const isIterable =
    data !== null && typeof data[Symbol.iterator] === "function";

  const items = isIterable ? [...data] : Object.keys(data ?? {});
  const count = items.length;

  let report = {
    type: isIterable ? "Iterable" : "Non-iterable",
    itemCount: count,
  };

  if (isIterable && count > 0) {
    report.firstItem = items[0];
    report.lastItem = items[count - 1];
  } else if (!isIterable && typeof data === "object" && data !== null) {
    report.keys = Object.keys(data);
  } else {
    report.message = "Data bersifat atomik (tidak memiliki properti/iterasi)";
  }

  return report;
}

console.log("String:", inspectCollection("hello"));
console.log("Array:", inspectCollection([1, 2, 3]));
console.log("Set:", inspectCollection(new Set([1, 2, 3])));
console.log("Map:", inspectCollection(new Map([["a", 1]])));
console.log("Object:", inspectCollection({ a: 1, b: 2 }));
console.log("Number:", inspectCollection(12345));

console.log("=== Soal Nomor 5 ===");
function createAccessTracker() {
  const accessData = {};

  function logEntry(name) {
    const timestamp = new Date();

    if (!accessData[name]) {
      accessData[name] = { count: 0, history: [] };
    }

    accessData[name].count += 1;
    accessData[name].history.push(timestamp);
  }

  return {
    enter(name) {
      logEntry(name);
    },

    report() {
      const names = Object.keys(accessData);
      const entries = {};
      let mostFrequent = null;
      let maxCount = 0;

      names.forEach((name) => {
        entries[name] = accessData[name].count;
        if (accessData[name].count > maxCount) {
          maxCount = accessData[name].count;
          mostFrequent = name;
        }
      });

      return {
        totalEmployees: names.length,
        totalEntries: names.reduce(
          (sum, name) => sum + accessData[name].count,
          0,
        ),
        mostFrequentVisitor: mostFrequent,
        entries: { ...entries },
      };
    },

    lastVisit(name) {
      if (!accessData[name] || accessData[name].history.length === 0) {
        return null;
      }
      const history = accessData[name].history;
      return new Date(history[history.length - 1]);
    },
  };
}

const tracker = createAccessTracker();
tracker.enter("Andi");
tracker.enter("Budi");
tracker.enter("Andi");

console.log("Report:", tracker.report());
console.log("Last visit Andi:", tracker.lastVisit("Andi"));
