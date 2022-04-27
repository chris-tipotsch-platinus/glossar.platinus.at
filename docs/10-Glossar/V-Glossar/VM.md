---
id: VM
titel: Virtuelle Maschine
tags: [Begriff]
---

# Virtuelle Maschine

Eine virtuelle Maschine ist eine virtuelle Darstellung oder Emulation eines physischen Computers. Sie wird manchmal auch als „Gast“  bezeichnet, im Gegensatz zur physischen Maschine, auf der sie ausgeführt wird, dem „Host“ (dt.: Wirt).

Die Virtualisierung macht es möglich, mehrere virtuelle Maschinen mit jeweils eigenem  Betriebssystem (OS) und eigenen Anwendungen auf einem einzigen  physischen Computer einzurichten. Eine VM kann nicht direkt mit einem  physischen Computer (der Hardware) interagieren. Stattdessen benötigt  sie eine dünne Softwareschicht, genannt **Hypervisor**. Dieser Hypervisor (manchmal auch VVM für Virtual Machine Monitor genannt) gewährleistet dann die Koordination zwischen der VM und der  Hardware. Der Hypervisor ordnet jeder VM physische Rechenressourcen wie Prozessoren, RAM, persistenten Speicher und Speicherkapazitäten zu. Er hält jede VM von den übrigen getrennt, damit sie sich nicht ins Gehege kommen. Diese Technologie hat viele Namen, u.a. virtueller Server, virtuelle  Serverinstanz (VSI) und virtueller privater Server (VPS). Im Folgenden  benutzen wir jedoch einfach VM, also virtuelle Maschine.

Virtuelle Maschinen (VMs) sind virtuelle Umgebungen, die eine  physische Rechenressource durch Software simulieren. Sie enthalten  normalerweise mehrere Dateien, die die Konfiguration der VM, den Speicher für die virtuelle Festplatte und einige Snapshots der VM enthalten, die ihren Zustand zu einem bestimmten Zeitpunkt festhalten.

Es gibt zwei Arten von Hypervisoren:

- **Typ-1-** **oder** **“Bare-Metal”-Hypervisoren** interagieren mit den zugrunde liegenden physischen Ressourcen und ersetzen das traditionelle Betriebssystem. Sie werden am häufigsten in Szenarios mit virtuellen Servern verwendet.
- **Typ-2-Hypervisoren** werden als Anwendung unter einem vorhandenen Betriebssystem (ZB Windows oder Linux) ausgeführt. Sie werden meist auf Endgeräten verwendet, um alternative Betriebssysteme auszuführen, und bedeuten einen zusätzlichen Verarbeitungsaufwand, da sie das Hostbetriebssystem nutzen müssen, um auf die zugrunde liegenden Hardwareressourcen zuzugreifen und diese zu koordinieren.

