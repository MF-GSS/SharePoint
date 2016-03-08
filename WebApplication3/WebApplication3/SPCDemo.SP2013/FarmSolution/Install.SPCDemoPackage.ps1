# PowerShell Installable v1.0 by Bind
[string] $package = "SPCDemo.SP2013.wsp"

# Add powershell snapin for sharepoint, if not added yet
if ((get-pssnapin -name Microsoft.SharePoint.PowerShell -registered -ErrorAction SilentlyContinue) -eq $null) { break } else { if ((get-pssnapin -name Microsoft.SharePoint.PowerShell -ErrorAction SilentlyContinue) -eq $null) { add-pssnapin Microsoft.SharePoint.PowerShell } }
$invokedFolder = [regex]::Replace($MyInvocation.MyCommand.Definition, "\\Install.SPCDemoPackage.ps1", "\res")
cd $invokedFolder

Write-Host "1 - Install with STSADM to farm"
Write-Host "2 - Retract with STSADM from farm"
Write-Host "3 - Delete with STSADM from farm"
Write-Host "0 - Exit"

[string] $option="0"
$option = Read-Host

if($option -eq "1")
{
	stsadm -o addsolution -filename $package
	stsadm -o deploysolution -name $package -immediate -allowGacDeployment
}

if($option -eq "2")
{
	stsadm -o retractsolution -name $package -immediate
}
if($option -eq "3")
{
	stsadm -o deletesolution -name $package
}



